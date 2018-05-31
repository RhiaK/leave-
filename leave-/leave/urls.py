# from django.urls import path
#
# from . import views
#
# urlpatterns = [
#     path('', views.ListDest.as_view()),
#     path('<int:pk>/', views.DetailDest.as_view()),
# ]


from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from leave import endpoints
from . import views


urlpatterns = [
    path('', views.ListDest.as_view()),
    path('<int:pk>/', views.DetailDest.as_view()),
    path('api/', include(endpoints)),
    path('api/auth/', include('knox.urls')),
    re_path('^', TemplateView.as_view(template_name="index.html")),
]
