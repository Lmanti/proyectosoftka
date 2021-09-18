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
def opcionApi(request, id = 0):
    if request.method == 'GET':
        opciones = Opcion.objects.all()
        opciones_serializer = OpcionSerializer(opciones, many = True)
        return JsonResponse(opciones_serializer.data, safe=False)
    elif request.method == 'POST':
        opcion_data = JSONParser().parse(request)
        opcion_serializer = OpcionSerializer(data=opcion_data)
        if opcion_serializer.is_valid():
            opcion_serializer.save()
            return JsonResponse("Categoria añadida!", safe=False)
        return JsonResponse("Falló al añadir la opcion", safe=False)
    elif request.method == 'PUT':
        opcion_data = JSONParser().parse(request)
        opcion = Opcion.objects.get(id=opcion_data['id'])
        opcion_serializer = OpcionSerializer(opcion, data=opcion_data)
        if opcion_serializer.is_valid():
            opcion_serializer.save()
            return JsonResponse("Opcion actualizada correctamente!", safe=False)
        return JsonResponse("Error al actualizar la Opcion", safe=False)
    elif request.method == 'DELETE':
        opcion = Opcion.objects.get(id=id)
        opcion.delete()
        return JsonResponse("Opcion eliminada satisfactoriamente!", safe=False)

@csrf_exempt
def premioApi(request, id = 0):
    if request.method == 'GET':
        premios = Premio.objects.all()
        premios_serializer = PremioSerializer(premios, many = True)
        return JsonResponse(premios_serializer.data, safe=False)
    elif request.method == 'POST':
        premio_data = JSONParser().parse(request)
        premio_serializer = PremioSerializer(data=premio_data)
        if premio_serializer.is_valid():
            premio_serializer.save()
            return JsonResponse("Premio añadido!", safe=False)
        return JsonResponse("Falló al añadir el premio", safe=False)
    elif request.method == 'PUT':
        premio_data = JSONParser().parse(request)
        premio = Premio.objects.get(id=premio_data['id'])
        premio_serializer = PremioSerializer(premio, data=premio_data)
        if premio_serializer.is_valid():
            premio_serializer.save()
            return JsonResponse("Premio actualizado correctamente!", safe=False)
        return JsonResponse("Error al actualizar el premio", safe=False)
    elif request.method == 'DELETE':
        premio = Premio.objects.get(id=id)
        premio.delete()
        return JsonResponse("Premio eliminado satisfactoriamente!", safe=False)

