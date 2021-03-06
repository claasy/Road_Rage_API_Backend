from django.db import models
from authentication.models import User
from vehicles.models import Vehicle

class Incident(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    plate = models.CharField(max_length=8)
    plate_state = models.CharField(max_length=2)
    vehicle_make = models.CharField(max_length=100)
    vehicle_model = models.CharField(max_length=100)
    vehicle_color = models.CharField(max_length=100)
    incident_type = models.CharField(max_length=20)
    incident_description = models.CharField(max_length=1000)
    approximate_date_and_time = models.DateTimeField()
    approximate_location = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)


