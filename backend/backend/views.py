from django.http import JsonResponse
import json
from .models import UsersData
from .serializers import UserDataSerializer
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from .utils import common_response

@api_view(['GET','POST'])
def users_list(request):
    if request.method == 'GET':
        users = UsersData.objects.all()
        serializer = UserDataSerializer(users, many=True)
        return JsonResponse({"users": serializer.data}, safe=False)    
    if request.method == 'POST':
        try:
            json_data = json.loads(request.body)
            serializer = UserDataSerializer(data=json_data)
            if serializer.is_valid():
                try:
                    serializer.save()
                    return common_response(data=serializer.data,status=status.HTTP_201_CREATED,message="success add user")
                except:
                    return common_response(status=status.HTTP_500_INTERNAL_SERVER_ERROR,message="Error: 'A server error occurred'")
            else:
                return common_response(error=serializer._errors,status=status.HTTP_400_BAD_REQUEST)
        except json.JSONDecodeError:
            return common_response(error="Invalid JSON data in the request body",status=status.HTTP_400_BAD_REQUEST)
    return common_response(error="Invalid request method",status=status.HTTP_405_METHOD_NOT_ALLOWED)
