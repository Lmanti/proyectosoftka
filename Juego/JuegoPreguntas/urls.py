from django.conf.urls import url
from JuegoPreguntas import views

urlpatterns = [
    url(r'^rondas$', views.rondaApi),
    url(r'^categoria/([0-9]+)$', views.categoriaApi)
]