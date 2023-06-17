from django.urls import path
from .views import RoomViews

urlpatterns = [
    path('api',RoomViews.as_view())
]
