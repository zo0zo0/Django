from django.urls import path
from mainapp.views import products, contacts, main


urlpatterns = [

    path('products/', products, name='products'),
    path('contacts/', contacts, name='contacts'),
]