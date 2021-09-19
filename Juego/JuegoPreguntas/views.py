from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from JuegoPreguntas.models import Categoria, Opcion, Pregunta, Premio, Jugador, Ronda
from JuegoPreguntas.serializers import CategoriaSerializer, OpcionSerializer, PreguntaSerializer, PremioSerializer, JugadorSerializer, RondaSerializer

# Create your views here.

@csrf_exempt
def categoriaApi(request, id = 0):
    if request.method == 'GET':
        categorias = Categoria.objects.all()
        categorias_serializer = CategoriaSerializer(categorias, many = True)
        return JsonResponse(categorias_serializer.data, safe=False)
    elif request.method == 'POST':
        categoria_data = JSONParser().parse(request)
        categoria_serializer = CategoriaSerializer(data=categoria_data)
        if categoria_serializer.is_valid():
            categoria_serializer.save()
            return JsonResponse("Categoria añadida!", safe=False)
        return JsonResponse("Falló al añadir la categoria", safe=False)
    elif request.method == 'PUT':
        categoria_data = JSONParser().parse(request)
        categoria = Categoria.objects.get(id=categoria_data['id'])
        categoria_serializer = CategoriaSerializer(categoria, data=categoria_data)
        if categoria_serializer.is_valid():
            categoria_serializer.save()
            return JsonResponse("Categoria actualizada correctamente!", safe=False)
        return JsonResponse("Error al actualizar la categoria", safe=False)
    elif request.method == 'DELETE':
        categoria = Categoria.objects.get(id=id)
        categoria.delete()
        return JsonResponse("Categoria eliminada satisfactoriamente!", safe=False)

@csrf_exempt
def rondaApi(request, id = 0):
    if request.method == 'GET':
        rondas = Ronda.objects.all()
        lista_rondas = []
        for ronda in rondas.values():
            categoria = Categoria.objects.get(id=ronda['categoria_id'])
            premio = Premio.objects.get(id=ronda['premio_id'])
            lista_rondas.append({
                "ronda_id": ronda['id'],
                "categoria": CategoriaSerializer(categoria, many=False).data,
                "premio": PremioSerializer(premio, many=False).data
            })
        return JsonResponse(lista_rondas, safe=False)
    if request.method == 'POST':
        ronda_data = JSONParser().parse(request)
        categorias = []
        for ronda in ronda_data:
            categoria = Categoria.objects.get_or_create(nombre = ronda['categoria']['nombre'])
            premio = Premio.objects.get_or_create(nombre = ronda['premio']['nombre'], descripcion=ronda['premio']['descripcion'])
            categorias.append(ronda['categoria']['nombre'])
            try:
                Ronda.objects.create(categoria=categoria[0], premio=premio[0])
            except:
                continue
        return JsonResponse(categorias, safe=False)

