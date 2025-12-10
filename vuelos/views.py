from django.shortcuts import render
from .serializer import ResevationSerializer
from .models import Reservation
from rest_framework import viewsets
import requests
from decouple import config
from rest_framework.response import Response
from django.db.models import Q
import time
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
    

def get_all_cities(access_key):
    all_cities= []
    limit = 100
    offset = 0
    has_more = True

    while has_more:
        url = f"https://api.aviationstack.com/v1/cities?access_key={access_key}&limit={limit}&offset={offset}"

        response = requests.get(url)
        data = response.json()

        if 'data' in data and data['data']: # verificar si en los datos existe el objeto data y si no estsa vacio 
            current_cities = data['data'] #usamos extend para agregar todos los elementos que encotremos, ya que append solo puede agregar un elemento y extend agrega todos los elementos individualmente
            all_cities.extend(current_cities)
            if len(current_cities) < limit :
                has_more = False
            else :
                offset += limit
        else:
            has_more = False

        time.sleep(0.1)
    return all_cities

class Cities(viewsets.ViewSet):
    def list(self, request):
        access_key = config ('API_KEY_FLIGHT')
        city_name = request.query_params.get('city_name') #se recibe el parametro de city name oara poder  filtrar 
        print(city_name)

        all_cities = get_all_cities(access_key) 
        #ahora filtramos los datos obtenido si es que hay city_name

        filtrados = [] 
        for city in all_cities:
            if city_name in city.get('city_name'):
                filtrados.append(city)
                print(filtrados)
        return Response(filtrados)
        