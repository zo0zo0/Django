from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.template.defaultfilters import title

from basketapp.models import Basket
from .models import ProductCategory, Product
# Create your views here.


def main(request):
    title = 'главная'
    products = Product.objects.all()[:4]
    content = {'title': title, 'products': products}
    return render(request, 'mainapp/index.html', content)

def products(request, pk=None):
        title = 'продукты'
        links_menu = ProductCategory.objects.all()

        if pk is not None:
            if pk == 0:
                products = Product.objects.all().order_by('price')
                category = {'name': 'все'}
            else:
                category = get_object_or_404(ProductCategory, pk=pk)
                products = Product.objects.filter(category__pk=pk).order_by('price')

            content = {
                'title': title,
                'links_menu': links_menu,
                'category': category,
                'products': products,
            }

            return render(request, 'mainapp/products_list.html', content)

        same_products = Product.objects.all()[3:5]

        content = {
            'title': title,
            'links_menu': links_menu,
            'same_products': same_products
        }
        return render(request, 'mainapp/products.html', content)


def contacts(requests):
    return render(requests, 'mainapp/contacts.html')

"""def products_list(requests):
    basket = []
    if request.user.is_authenticated:
        basket = Basket.objects.filter(user=request.user)

    if pk:
        if pk == '0':
            products = Product.objects.all().order_by('price')
            category = {'name': 'все'}
        else:
            category = get_object_or_404(ProductCategory, pk=pk)
            products = Product.objects.filter(category__pk=pk).order_by('price')

        content = {
            'title': title,
            'links_menu': links_menu,
            'category': category,
            'products': products,
            'basket': basket,
        }

        return render(requests, 'mainapp/products_list.html', content)"""