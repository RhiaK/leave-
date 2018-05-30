from rest_framework import serializers
from . import models


class DestSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'dest_title',
            'dest_add',
            'dest_city',
            'dest_state',
            'dest_zipcode',
            'dest_time',
        )
        model = models.Dest