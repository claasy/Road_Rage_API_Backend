from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Incident
from .serializers import IncidentSerializer
from authentication.models import User
from vehicles.models import Vehicle


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_incidents(request):
    incidents = Incident.objects.all()
    serializer = IncidentSerializer(incidents, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_incidents(request):
    if request.method == 'POST':
        plate_from_request = request.data['plate']
        try:
            incident_vehicle = Vehicle.objects.get(plate=plate_from_request)
        except ObjectDoesNotExist:
            incident_vehicle = Vehicle(plate=plate_from_request)
            incident_vehicle.save()
        request.data['vehicle'] = incident_vehicle.id
        serializer = IncidentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_incidents(request,plate):
    if request.method == 'GET':
        try:
            incident_vehicle = Incident.objects.filter(plate=plate)
            serializer = IncidentSerializer(incident_vehicle, many=True)
        except ObjectDoesNotExist:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
    return Response(serializer.data, status=status.HTTP_201_CREATED)
    




