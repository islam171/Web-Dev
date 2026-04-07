from rest_framework import generics, status
from api.models import Product
from api.models import Category

from api.serializers import ProductSerializer
from api.serializers import CategorySerializer
from rest_framework.response import Response
from rest_framework.views import APIView


class ProductListAPIViewGeneric(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'id'

class ProductDetailAPIViewGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'id'

class CategoryListAPIViewGeneric(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'id'

class CategoryDetailAPIViewGeneric(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'id'

class CategoryProductAPIView(APIView):

    def get(self, request, id):
        product = Product.objects.all()
        product = product.filter(category = id)
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)