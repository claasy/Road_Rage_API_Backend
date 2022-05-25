from rest_framework import serializers
from .models import Incident

class IncidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incident
        fields = ['id', 'user_id', 'vehicle', 'plate', 'plate_state','vehicle_make', 'vehicle_model', 'vehicle_color', 'incident_type', 'incident_description', 'approximate_date_and_time', 'approximate_location', 'city', 'state']