from django.shortcuts import render

# Create your views here.
def main(requests):
    return render(requests, 'mainapp/index.html')

def products(requests):
    return render(requests, 'mainapp/products.html')

def contacts(requests):
    return render(requests, 'mainapp/contacts.html')
