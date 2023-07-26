from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CameraSerializer
from .models import Camera
from django.http import JsonResponse
# Create your views here.import cv2
from django.http import StreamingHttpResponse
from django.views.decorators import gzip
import numpy as np
import cv2
from .alexnet import *

# from .distanceColor import *
# from .locationCoordinates import *
# from .trajectoryInCamera import *

def get_video_feed_url(request, id):
    # video_url = "http://localhost:8000/video/2"  # Replace with the actual video feed URL from your Django view

    video_url = {
        0: "http://localhost:8000/video/0",
        1: "http://localhost:8000/video/1",
        2: "http://localhost:8000/video/2"
    }
    return JsonResponse({"video_url": video_url[id]})


# Decorator to compress the video stream
@gzip.gzip_page
def video_feed(request,id):
    # Open the video capture
    video_capture = cv2.VideoCapture(id,cv2.CAP_DSHOW)  # Use 0 for webcam, or provide a video file path
    print(id)
    # Function to generate video frames
    def generate_frames():
        while True:
            # Read the next frame from the video capture
            success, frame = video_capture.read()
            if not success:
                break
            # cv2.putText(frame, "checking", (75, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
            
            # frame = detect_blue_color(frame)
            
            
            # Convert the frame to JPEG format
            ret, buffer = cv2.imencode('.jpg', frame)
            # frame = detect_blue_color(frame)
            
            frame = buffer.tobytes()

            # Yield the frame as a chunk for the streaming response
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

    # Return a streaming HTTP response
    return StreamingHttpResponse(generate_frames(), content_type='multipart/x-mixed-replace; boundary=frame')

@gzip.gzip_page
def stereoVision(request,camera) :
    port_numbers=camera.split('-')
    video_port_l = port_numbers[0]
    video_port_r = port_numbers[1]
    print(video_port_r)
    vc_left = cv2.VideoCapture(int(video_port_l),cv2.CAP_DSHOW)  # Replace '0' with the correct device index or video file path for the left camera
    vc_right = cv2.VideoCapture(int(video_port_r),cv2.CAP_DSHOW)  # Replace '1' with the correct device index or video file path for the right camera
    def generate_frames_combined() : 
        while True:
            ret_left, frame_left = vc_left.read()
            ret_right, frame_right = vc_right.read()
            if not ret_left or not ret_right:
                print("Error: Could not capture frames.")
                break

            # Preprocess the left frame
            frame_left_resized = cv2.resize(frame_left, (227, 227))
            frame_left_resized = frame_left_resized.astype(np.float32) / 255.0
            frame_left_resized = (frame_left_resized - [0.485, 0.456, 0.406]) / [0.229, 0.224, 0.225]
            frame_left_tensor = torch.tensor(frame_left_resized.transpose(2, 0, 1)).unsqueeze(0).to(device)
            frame_left_tensor = frame_left_tensor.float()

            # Preprocess the right frame
            frame_right_resized = cv2.resize(frame_right, (227, 227))
            frame_right_resized = frame_right_resized.astype(np.float32) / 255.0
            frame_right_resized = (frame_right_resized - [0.485, 0.456, 0.406]) / [0.229, 0.224, 0.225]
            frame_right_tensor = torch.tensor(frame_right_resized.transpose(2, 0, 1)).unsqueeze(0).to(device)
            frame_right_tensor = frame_right_tensor.float()

            # Perform inference with the model for left and right frames
            with torch.no_grad():
                model.eval()
                predicted_classes_left, predicted_bbox_left = model(frame_left_tensor)
                predicted_classes_right, predicted_bbox_right = model(frame_right_tensor)

            # Get the predicted class and confidence for left frame
            _, predicted_class_left = torch.max(predicted_classes_left, 1)
            predicted_label_left = class_labels[predicted_class_left.item()]
            predicted_confidence_left = torch.softmax(predicted_classes_left, 1)[0][predicted_class_left].item()
            overlay_text_left = f"Left Frame - Class: {predicted_label_left}, Confidence: {predicted_confidence_left:.2f}"

            # Get the predicted class and confidence for right frame
            _, predicted_class_right = torch.max(predicted_classes_right, 1)
            predicted_label_right = class_labels[predicted_class_right.item()]
            predicted_confidence_right = torch.softmax(predicted_classes_right, 1)[0][predicted_class_right].item()
            overlay_text_right = f"Right Frame - Class: {predicted_label_right}, Confidence: {predicted_confidence_right:.2f}"

            # Draw bounding box for left frame
            predicted_bbox_coords_left = predicted_bbox_left.squeeze().cpu().numpy().astype(np.float32)
            xmin_left, ymin_left, width_left, height_left = predicted_bbox_coords_left
            scale_x_left = frame_left.shape[1] / 227
            scale_y_left = frame_left.shape[0] / 227
            xmin_left *= scale_x_left
            width_left *= scale_x_left
            ymin_left *= scale_y_left
            height_left *= scale_y_left
            xmax_left = xmin_left + width_left
            ymax_left = ymin_left + height_left
            cv2.rectangle(frame_left, (int(xmin_left), int(ymin_left)), (int(xmax_left), int(ymax_left)), (0, 255, 0), 2)
            cv2.putText(frame_left, overlay_text_left, (20, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

            # Draw bounding box for right frame
            predicted_bbox_coords_right = predicted_bbox_right.squeeze().cpu().numpy().astype(np.float32)
            xmin_right, ymin_right, width_right, height_right = predicted_bbox_coords_right
            scale_x_right = frame_right.shape[1] / 227
            scale_y_right = frame_right.shape[0] / 227
            xmin_right *= scale_x_right
            width_right *= scale_x_right
            ymin_right *= scale_y_right
            height_right *= scale_y_right
            xmax_right = xmin_right + width_right
            ymax_right = ymin_right + height_right
            cv2.rectangle(frame_right, (int(xmin_right), int(ymin_right)), (int(xmax_right), int(ymax_right)), (0, 255, 0), 2)
            cv2.putText(frame_right, overlay_text_right, (20, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            combined_frame = np.hstack((frame_left,frame_right))
            ret, buffer = cv2.imencode('.jpg', combined_frame)
            combined_frame = buffer.tobytes()

            # Yield the combined frame as a chunk for the streaming response
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + combined_frame + b'\r\n\r\n')
    return StreamingHttpResponse(generate_frames_combined(), content_type='multipart/x-mixed-replace; boundary=frame')
    



class CameraView(viewsets.ModelViewSet):
    serializer_class = CameraSerializer
    queryset = Camera.objects.all()