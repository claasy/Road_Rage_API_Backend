from django.urls import path
from vehicles import views

urlpatterns = [
    path('', views.user_vehicles),
    path('all/', views.get_all_vehicles)
]