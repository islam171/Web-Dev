import json

from django.core import serializers
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework.response import Response

from Lab10.shopBack.api.models import Product, Category
from Lab10.shopBack.api.serializers import ProductSerializer, CategorySerializer


# Create your views here.
def index(request):
    return HttpResponse("Hello, world.")

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


    def list(self, request, **kwargs):
        queryset = Product.objects.all()
        category_id = request.GET.get("category")
        search = request.GET.get("search")
        query_active = request.GET.get("active")

        if (category_id):
            queryset = queryset.filter(category=category_id)
        if (search):
            queryset = queryset.filter(name__icontains=search)
        if (query_active):
            queryset = queryset.filter(active=query_active)

        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


def getProductsByCategory(request, id):
    data = serializers.serialize("json", Product.objects.filter(category=id))
    loaded = json.loads(data)
    list = [i["fields"] for i in loaded]
    return JsonResponse(list, safe=False)