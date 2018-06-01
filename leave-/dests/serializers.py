from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from .models import Dest

#
# class DestSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Dest
#         fields = (
#             'id',
#             'dest_title',
#             'dest_add',
#             'dest_city',
#             'dest_state',
#             'dest_zipcode',
#             'dest_time',
#         )
#

class DestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dest
        fields = ('id', 'text', )


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        None,
                                        validated_data['password'])
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")
