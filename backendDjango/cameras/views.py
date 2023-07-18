from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CameraSerializer
from .models import Camera
# Create your views here.


class CameraView(viewsets.ModelViewSet):
    serializer_class = CameraSerializer
    queryset = Camera.objects.all()