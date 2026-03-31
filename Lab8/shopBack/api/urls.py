from django.urls import path
from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("categories/<int:id>/products", views.getProductsByCategory, name="index"),
]

router = DefaultRouter()
router.register('products', views.ProductViewSet, basename='products')
router.register('categories', views.CategoryViewSet, basename='categories')
urlpatterns += router.urls


