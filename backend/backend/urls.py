from django.contrib import admin
from django.urls import path
from backend import views

urlpatterns = [
    path('admin/', admin.site.urls,name='admin'),
    path('user-data/', views.users_list,name='user_list'),
]
