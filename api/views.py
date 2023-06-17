from django.shortcuts import render
from django.http import HttpResponse
from .serializers import RoomSerializer
from rest_framework.generics import CreateAPIView,ListAPIView
from .models import Room

# Create your views here. Web-peak and babel.
class RoomViews(ListAPIView,CreateAPIView):
    queryset= Room.objects.all()
    serializer_class = RoomSerializer