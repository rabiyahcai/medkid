from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
import openai
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

class DataView(APIView):
    def get(self, request):
        return JsonResponse({
            'message': 'Hello from Django API!',
            'info': 'This data is coming from the Django backend.'
        })

# Get OpenAI API Key from settings
OPENAI_API_KEY = settings.OPENAI_API_KEY

@csrf_exempt  # Disable CSRF for API testing
def diagnose(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            symptoms = data.get("symptoms", "")
            age = data.get("age", "")
            gender = data.get("gender", "")

            response = openai.ChatCompletion.create(
                model="gpt-4o",
                messages=[
                    {"role": "system", "content": "You are a child-friendly medical assistant. Provide possible diagnoses based on symptoms, but avoid making definitive medical claims."},
                    {"role": "user", "content": f"My child is {age} years old, {gender}, and has these symptoms: {symptoms}. What could be the issue?"}
                ]
            )

            diagnosis = response["choices"][0]["message"]["content"]
            return JsonResponse({"diagnosis": diagnosis})

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)
    
    return JsonResponse({"error": "Invalid request"}, status=400)