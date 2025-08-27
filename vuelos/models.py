from django.db import models


# Create your models here.

class Reservation(models.Model):
    arrival_city = models.CharField(max_length=200)
    departure_city= models.CharField(max_length=200)
    passengers = models.IntegerField(null=False)
    type_flight = models.ForeignKey('TypeFlights', on_delete=models.CASCADE, related_name="type")
    departure_date = models.DateField(null=False)
    comeback_date = models.DateField()

    

class TypeFlights(models.Model):
    type_name= models.CharField(max_length=200)

    def __str__(self):
        return self.type_name