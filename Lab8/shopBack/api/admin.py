from django.contrib import admin

from .models import Product, Category


# Register your models here.

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "price", "count","is_active", "category")
    list_filter = ("category", "is_active")
    search_fields = ("name",)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    list_filter = ("name",)
    search_fields = ("name",)
