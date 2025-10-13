from django.shortcuts import render
from .serializer import ResevationSerializer
from .models import Reservation
from rest_framework import viewsets
import requests
from decouple import config
from rest_framework.response import Response
from django.db.models import Q
# Create your views here.


class ReservertionView(viewsets.ModelViewSet):#endpoint
    serializer_class = ResevationSerializer
    queryset = Reservation.objects.all()

    #tengo que filtrar los datosde la api aquí para que se filtren en el front
    def get_queryset(self):
        queryset = super().get_queryset() #Se obtiene el queryset base que es el de reservaciones
        arrival_city= self.request.GET.get('arrival_city', '')
        departure_city= self.request.GET.get('departure_city', '')
        comeback_date = self.request.GET.get('comeback_date', '')

        #hacer filtros dinamicos

        filtros = Q()#un objeto que sive para contruir consultas avanzadas OR, AND NOT ( | , &,  ~)

        if departure_city:
            filtros &=  Q(departure_city__icontains=departure_city)
        if arrival_city:
            filtros &=  Q(arrival_city__icontains=arrival_city)
        if comeback_date:
            filtros &= Q(comeback_date__icontains=comeback_date)

        return queryset.filter(filtros)

    
    

class Vuelos(viewsets.ViewSet):#endponint
    def list(self):
        access_key = config('API_KEY_FLIGHT')
        url = f"https://api.aviationstack.com/v1/flights?access_key={access_key}"
        response = requests.get(url)
        data = response.json()
        return Response(data)
    

class Cities(viewsets.ViewSet):
    def list(self, request):
        acces_key = config ('API_KEY_FLIGHT')
        url = f"https://api.aviationstack.com/v1/cities?access_key={acces_key}"
        response = requests.get(url)
        data = response.json()
        return Response(data)