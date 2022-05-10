from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Vehicle
from .serializers import VehicleSerializer
from authentication.models import User


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_vehicles(request):
    vehicles = Vehicle.objects.all()
    serializer = VehicleSerializer(vehicles, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_vehicles(request):
    if request.method == 'POST':
        # grab plate from request
        plate_from_request = request.data['plate']
        # find existing vehicle with that plate
        try:
            vehicle = Vehicle.objects.get(plate=plate_from_request)
            # if vehicle exists, update that vehicle with all the fields from the request
            vehicle.user = request.user
            vehicle.type = request.data['type']
            vehicle.color = request.data['color']
            vehicle.model = request.data['model']
            vehicle.make = request.data['make']
            #finish other fields from form
            vehicle.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        # otherwise, create new vehicle   
        except ObjectDoesNotExist:
            serializer = VehicleSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
