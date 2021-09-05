from django.shortcuts import render

# Create your views here.
from mainapp.models import Product


def main(requests):
    title = 'Главная'
    products = Product.object.all()
    content = {"title": title, 'products': products}
    return render(requests, 'mainapp/index.html', content)

def products(requests):
    return render(requests, 'mainapp/products.html')

def contacts(requests):
    return render(requests, 'mainapp/contacts.html')
