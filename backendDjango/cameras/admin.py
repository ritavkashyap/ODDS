from django.contrib import admin
from .models import Camera
from .models import TrajectoryImage


## Registering Cameras app with the admin panel so that CRUD operations can be performed on it
class CameraAdmin(admin.ModelAdmin):
    list_display = ("title", "ipAddress", "P2PUID", "latitude", "longitude", "altitude", "resolution", "framerate")
class TrajectoryImageAdmin(admin.ModelAdmin):
    list_display = ('P2PUID', 'image')


# Register your models here.
admin.site.register(Camera, CameraAdmin)
admin.site.register(TrajectoryImage, TrajectoryImageAdmin)

