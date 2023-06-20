from django.urls import path
from .views import RoomViews,CreateRoomView

urlpatterns = [
    path('/',RoomViews.as_view()),
    path('create-room/',CreateRoomView.as_view())
]
