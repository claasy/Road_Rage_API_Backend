from django.db import models
from authentication.models import User

class Vehicle(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    plate = models.CharField(max_length=8)
    plate_state = models.CharField(max_length=2)
    make = models.CharField(max_length=30, null=True, blank=True)
    model = models.CharField(max_length=50, null=True, blank=True)
    color = models.CharField(max_length=30, null=True, blank=True)


