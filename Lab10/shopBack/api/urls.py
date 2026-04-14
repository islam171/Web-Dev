from django.urls import path
from . import views

urlpatterns = [
    # path("", views.index, name="index"),
    # path("categories/<int:id>/products", views.getProductsByCategory, name="index"),
    path("fbv/products/", views.product_list),
    path("fbv/products/<int:id>", views.product_detail),
    path("cbv/products/", views.ProductListAPIView.as_view()),
    path("cbv/products/<int:id>", views.ProductDetailAPIView.as_view()),
    path("mixins/products/", views.ProductListMixinView.as_view()),
    path("mixins/products/<int:id>", views.ProductDetailMixinView.as_view()),
    path("generics/products/", views.ProductListAPIViewGeneric.as_view()),
    path("generics/products/<int:id>", views.ProductDetailAPIViewGeneric.as_view()),
    path("generics/category/", views.CategoryListAPIViewGeneric.as_view()),
    path("generics/category/<int:id>", views.CategoryDetailAPIViewGeneric.as_view()),
    path("generics/category/<int:id>/products", views.CategoryProductAPIView.as_view()),
    path('fbv/products/active/', views.active_products),
    path('fbv/products/expensive/', views.expensive_products),
    path('cbv/products/active/', views.activeProductCBV.as_view()),
    path('cbv/products/expensive/', views.expensiveProductCBV.as_view()),
    path('mixins/products/active/', views.activeProductMixins.as_view()),
    path('mixins/products/expensive/', views.expensiveProductMixins.as_view()),
    path('generics/products/active/', views.activeProductGen.as_view()),
    path('generics/products/expensive/', views.expensiveProductGen.as_view()),
]