# utils.py
from django.http import JsonResponse
from rest_framework import status

def common_response(data=None, status=status.HTTP_200_OK, error=None, message=None):
    response_data = {
        'message':message,
        'data': data, 
        'error': error}
    return JsonResponse(response_data, status=status)
