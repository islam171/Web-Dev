from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("products/", views.getAllProducts, name="index"),
    path("products/<int:id>", views.getProductById, name="index"),
    path("categories/", views.getAllCategories, name="index"),
    path("categories/<int:id>/", views.getCategoryById, name="index"),
    path("categories/<int:id>/products", views.getProductsByCategory, name="index"),
]