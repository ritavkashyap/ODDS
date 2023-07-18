from django.contrib import admin
from .models import Camera

## Registering Cameras app with the admin panel so that CRUD operations can be performed on it
class CameraAdmin(admin.ModelAdmin):
    list_display = ("title", "ipAddress", "P2PUID", "latitude", "longitude", "altitude", "resolution", "framerate")


# Register your models here.
admin.site.register(Camera, CameraAdmin)


