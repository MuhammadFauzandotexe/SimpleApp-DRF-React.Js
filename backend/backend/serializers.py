from rest_framework import serializers
from .models import UsersData
class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsersData
        fields = ['id','name','identity_number','email','date_of_birth']
