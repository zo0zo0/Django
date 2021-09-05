from django.shortcuts import render
from mainapp.models import Product
# Create your views here.


def main(requests):
    '''title = 'Главная'
    products = Product.object.all()
    content = {"title": title, 'products': products}'''
    return render(requests, 'mainapp/index.html')

def products(requests):
    return render(requests, 'mainapp/products.html')

def contacts(requests):
    return render(requests, 'mainapp/contacts.html')
