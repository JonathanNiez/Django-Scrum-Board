from django.urls import path
from .views import board_details
from .views import board_details

urlpatterns = [
    path('details/', board_details),
]
