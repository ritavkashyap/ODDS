# from django.shortcuts import render

# # Create your views here.

from django.shortcuts import render
# from rest_framework import viewsets
# from .serializers import CameraSerializer
# from .models import Camera
# Create your views here.


# views.py

import cv2
from django.http import StreamingHttpResponse
from django.views.decorators import gzip
import numpy as np
import cv2

# from .distanceColor import *
# from .locationCoordinates import *
# from .trajectoryInCamera import *




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

# class CameraView(viewsets.ModelViewSet):
#     serializer_class = CameraSerializer
#     queryset = Camera.objects.all() 