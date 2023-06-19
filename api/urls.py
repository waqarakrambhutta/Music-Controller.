from django.urls import path
from .views import RoomViews,CreateRoomView

urlpatterns = [
    path('api/',RoomViews.as_view()),
    path('api/create-room/',CreateRoomView.as_view())
]
