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
from django.core.mail import send_mail

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
        print("get_user_incidents", plate)
        try:
            incident_vehicle = Incident.objects.filter(plate=plate)
            serializer = IncidentSerializer(incident_vehicle, many=True)
        except ObjectDoesNotExist:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def send_email(request):
    user = request.user
    from_email = request.data['from']

    print("from", from_email)
    print("to", user)

    subject = "Incident Reported from Road Rage"
    content = "An incident has been reported against your vehicle. Please go to Roadrage.com to learn more."

    send_mail(subject, content, from_email, [user])

    return Response({'message': 'sent'}, status=status.HTTP_200_OK)

    # in order to send email, there should be from/to/subject/content
    # from: aclaas522@gmail.com
    # to: jack@gmail.com
    # subject: Incident Reported from Road Rage
    # Content: An incident has been reported against your vehicle. Please go to Roadrage.com to learn more.
    # in order to send email, you need to configure smtp. did you have smtp account?
    # we have sepnt 40mins, $80 is fine? do you have paypal?
    # my paypal is smartcode121@outlook.com, please don't close zoom until payment
    # do you have discord or whatsapp?



