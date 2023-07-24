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

class CameraView(viewsets.ModelViewSet):
    serializer_class = CameraSerializer
    queryset = Camera.objects.all()