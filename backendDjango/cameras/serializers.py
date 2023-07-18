from rest_framework import serializers
from .models import Camera

class CameraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Camera
        fields = ('id', 'title', 'P2PUID', 'ipAddress', 'latitude', 'longitude', 'altitude', 'resolution', 'framerate')
