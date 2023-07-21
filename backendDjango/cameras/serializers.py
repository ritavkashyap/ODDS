from rest_framework import serializers
from .models import Camera
from .models import TrajectoryImage

class CameraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Camera
        fields = ('id', 'title', 'P2PUID', 'ipAddress', 'latitude', 'longitude', 'altitude', 'resolution', 'framerate')
class TrajectoryImage(serializers.ModelSerializer):
    class Meta:
        model = TrajectoryImage
        fields = ('id', 'P2PUID', 'image')
