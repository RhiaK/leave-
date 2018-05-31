from rest_framework import generics
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated

from . import models
from . import serializers


class ListDest(generics.ListCreateAPIView):
    queryset = models.Dest.objects.all()
    serializer_class = serializers.DestSerializer
    permission_classes = (IsAuthenticated, )


class DetailDest(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Dest.objects.all()
    serializer_class = serializers.DestSerializer
    permission_classes = (IsAuthenticated, )
