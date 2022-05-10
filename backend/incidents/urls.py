from django.urls import path
from incidents import views

urlpatterns = [
    path('', views.user_incidents),
    path('all/',views.get_all_incidents),
]