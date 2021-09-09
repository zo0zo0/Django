from django.db import models

# Create your models here.

class ProductCategory(models.Model):
    name = models.CharField(verbose_name='Имя', max_length=64, unique=True)
    description = models.TextField(verbose_name="Описание", blank="True")

    def __str__(self):
        return self.name

    """class Meta:
        db_table = 'products_category'"""

class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    name = models.CharField(verbose_name='Имя продукта', max_length=128)
    image = models.ImageField(upload_to='products_images', blank=True)
    short_desc = models.CharField(verbose_name='Краткое описание продукта', max_length=60, blank=True)
    description = models.TextField(verbose_name='Описание продукта', blank=True)
    price = models.DecimalField(verbose_name='Цена продукта', max_digits=8, decimal_places=2, default=0)
    quantity = models.PositiveIntegerField(verbose_name='Количество на складе', default=0)

    def __str__(self):
        return f'{self.name}{self.category.name}'