from tkinter import CASCADE
from django.db import models
from authentication.models import User

class Incident(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    license_plate = models.CharField(max_length=8)
    incident_type = models.CharField(max_length=20)
    incident_description = models.CharField(max_length=1000)
    approximate_date_and_time = models.DateTimeField()
    approximate_location = models.CharField(max_length=100)

# Create your models here.
