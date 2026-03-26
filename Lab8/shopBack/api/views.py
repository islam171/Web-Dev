import json
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from .models import Product, Category


# Create your views here.
def index(request):
    return HttpResponse("Hello, world.")

def getAllProducts(request):
    data = serializers.serialize("json", Product.objects.all())
    loaded = json.loads(data)
    list = [i["fields"] for i in loaded]
    return JsonResponse(list, safe=False)

def getProductById(request, id):
    data = serializers.serialize("json", Product.objects.filter(pk=id))
    loaded = json.loads(data)
    list = [i["fields"] for i in loaded]
    return JsonResponse(list, safe=False)

def getAllCategories(request):
    data = serializers.serialize("json", Category.objects.all())
    loaded = json.loads(data)
    list = [i["fields"] for i in loaded]
    return JsonResponse(list, safe=False)

def getCategoryById(request, id):
    data = serializers.serialize("json", Category.objects.filter(pk=id))
    loaded = json.loads(data)
    list = [i["fields"] for i in loaded]
    return JsonResponse(list, safe=False)

def getProductsByCategory(request, id):
    # return HttpResponse("Hello, world.")
    data = serializers.serialize("json", Product.objects.filter(category=id))
    loaded = json.loads(data)
    list = [i["fields"] for i in loaded]
    return JsonResponse(list, safe=False)