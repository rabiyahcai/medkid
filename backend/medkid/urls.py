# medkid/urls.py
from django.urls import path
from .views import DataView
from . import views
from django.http import JsonResponse
from django.contrib import admin
from .views import diagnose 

urlpatterns = [
    path('data/', views.DataView.as_view(), name='data-api'), 
    path('', lambda request: JsonResponse({"message": "Welcome to the MedKid API!"})),
    path('admin/', admin.site.urls),
    path('api/diagnose/', diagnose),
]