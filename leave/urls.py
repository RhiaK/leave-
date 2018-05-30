from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListDest.as_view()),
    path('<int:pk>/', views.DetailDest.as_view()),
]