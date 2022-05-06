from django.db import models
from authentication.models import User

class Vehicle(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plate = models.CharField(max_length=8)
    make = models.CharField(max_length=30)
    model = models.CharField(max_length=50)
    color = models.CharField(max_length=30)



# Create your models here.
