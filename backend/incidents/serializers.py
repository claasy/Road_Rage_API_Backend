from rest_framework import serializers
from .models import Incident

class IncidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incident
        fields = ['id', 'user_id', 'vehicle', 'license_plate', 'incident_type', 'incident_description', 'approximate_date_and_time', 'approximate_location', 'city', 'state']