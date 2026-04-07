from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    count = models.IntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField()

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.name

