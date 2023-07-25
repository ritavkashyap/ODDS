from django.db import models

# Create your models here.
class Camera(models.Model):
    title = models.CharField(max_length=50)
    ipAddress = models.CharField(max_length=100)
    P2PUID = models.CharField(max_length=50)
    latitude = models.CharField(max_length=50)
    longitude = models.CharField(max_length=50)
    altitude = models.CharField(max_length=50)
    resolution = models.IntegerField()
    framerate = models.IntegerField()

    def __str__(self):
        return self.title
    
class TrajectoryImage(models.Model):
    CameraId=models.CharField(max_length=50, null=True)
    DroneId=models.CharField(max_length=50, null=True)
    image=models.ImageField(upload_to="camera/TrajectoryImages", default="")
    DateTime=models.DateTimeField(null=True,unique=True)


    def __str__(self):
        return self.CameraId