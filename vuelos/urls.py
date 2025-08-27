
from django.urls import path, include
from rest_framework import routers
from vuelos import views

router = routers.DefaultRouter()
router.register(r'reservaciones', views.ReservertionView, 'reservaciones')
router.register(r'vuelos', views.Vuelos, 'vuelos')

urlpatterns = [
    path("api/", include(router.urls))
]