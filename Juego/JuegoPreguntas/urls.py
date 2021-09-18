from django.conf.urls import url
from JuegoPreguntas import views

urlpatterns = [
    url(r'^categoria/$', views.categoriaApi),
    url(r'^categoria/([0-9]+)$', views.categoriaApi)
]