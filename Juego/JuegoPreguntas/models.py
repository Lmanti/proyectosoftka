from django.db import models
from django.db.models.fields.related import ManyToManyField

# Create your models here.

class Categoria(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)

class Opcion(models.Model):
    id = models.AutoField(primary_key=True)
    descripcion = models.CharField(max_length=50)
    escorrecta = models.BooleanField(default=False)

class Pregunta(models.Model):
    id = models.AutoField(primary_key=True)
    descripcion = models.TextField()
    opciones = models.ManyToManyField(Opcion, related_name='opciones')
    puntos = models.IntegerField()
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE, default=None, null=False, blank=False, related_name='preguntas')

class Premio(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField()

class Ronda(models.Model):
    id = models.AutoField(primary_key=True)
    categoria = models.OneToOneField(Categoria, on_delete=models.CASCADE, null=False, blank=False, default=None)
    premio = models.OneToOneField(Premio, on_delete=models.CASCADE, null=False, blank=False, default=None)

class Jugador(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    puntos = models.IntegerField(default=0)
    premios = ManyToManyField(Premio, related_name='premios', default=None)