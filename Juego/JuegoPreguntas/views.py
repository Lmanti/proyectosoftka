from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from JuegoPreguntas.models import Categoria, Opcion, Pregunta, Premio, Jugador, Ronda
from JuegoPreguntas.serializers import CategoriaSerializer, OpcionSerializer, PreguntaSerializer, PremioSerializer, JugadorSerializer, RondaSerializer

# Create your views here.

@csrf_exempt
# Crear API para ronda
def rondaApi(request, id = 0):
    # El metodo GET toma los datos de la base de datos, los organiza y los manda en formato JSON
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
    # El metodo POST toma los datos entrantes y los clasifica, crea las entidades y relaciones
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
        return JsonResponse("Rondas añadidas", safe=False)

@csrf_exempt
# Crear API para preguntas
def preguntaApi(request, id = 0):
    # El metodo post toma los datos entrantes, los parsea, los clasifica, crea las entidades correspondientes y las relaciones
    if request.method == 'POST':
        preguntas_data = JSONParser().parse(request)
        for categoria in preguntas_data:
            categoria_pregunta = Categoria.objects.get(nombre=categoria['nombre'])
            for pregunta in categoria['preguntas']:
                opcion_A = Opcion.objects.get_or_create(descripcion=pregunta['opciones']['opcion_A']['descripcion'], escorrecta=pregunta['opciones']['opcion_A']['escorrecta'])
                opcion_B = Opcion.objects.get_or_create(descripcion=pregunta['opciones']['opcion_B']['descripcion'], escorrecta=pregunta['opciones']['opcion_B']['escorrecta'])
                opcion_C = Opcion.objects.get_or_create(descripcion=pregunta['opciones']['opcion_C']['descripcion'], escorrecta=pregunta['opciones']['opcion_C']['escorrecta'])
                opcion_D = Opcion.objects.get_or_create(descripcion=pregunta['opciones']['opcion_D']['descripcion'], escorrecta=pregunta['opciones']['opcion_D']['escorrecta'])
                try:
                    p = Pregunta.objects.get_or_create(descripcion=pregunta['descripcion'], puntos=pregunta['puntos'], categoria=categoria_pregunta)
                    p[0].opciones.add(opcion_A[0], opcion_B[0], opcion_C[0], opcion_D[0])
                    p[0].save()
                except Exception as e:
                    print(e)
                    continue
        return JsonResponse("Preguntas añadidas!", safe=False)
    # El metodo GET toma los datos de la base de datos, los organiza y los manda en formato JSON
    if request.method == 'GET':
        preguntas = Pregunta.objects.all()
        preguntas_serializer = PreguntaSerializer(preguntas, many=True)
        lista_preguntas = []
        for pregunta in preguntas_serializer.data:
            categoria = Categoria.objects.get(id=pregunta['categoria'])
            opcion_A = Opcion.objects.get(id=pregunta['opciones'][0])
            opcion_B = Opcion.objects.get(id=pregunta['opciones'][1])
            opcion_C = Opcion.objects.get(id=pregunta['opciones'][2])
            opcion_D = Opcion.objects.get(id=pregunta['opciones'][3])
            lista_preguntas.append({
                "id": pregunta['id'],
                "descripcion": pregunta['descripcion'],
                "puntos": pregunta['puntos'],
                "categoria": CategoriaSerializer(categoria, many=False).data,
                "opciones": [
                    OpcionSerializer(opcion_A, many=False).data,
                    OpcionSerializer(opcion_B, many=False).data,
                    OpcionSerializer(opcion_C, many=False).data,
                    OpcionSerializer(opcion_D, many=False).data
                ]
            })
        return JsonResponse(lista_preguntas, safe=False)

@csrf_exempt
# Crear API para jugadores
def jugadorApi(request, id = 0):
    # El metodo post crea el jugador en la base de datos
    if request.method == 'POST':
        jugador_datos = JSONParser().parse(request)
        jugador_serializer = JugadorSerializer(data=jugador_datos)
        if jugador_serializer.is_valid():
            jugador_serializer.save()
            return JsonResponse("jugador adañido correctamente", safe=False)
    # Toma los datos de la db y los manda  en JSON al front
    if request.method == 'GET':
        jugadores = Jugador.objects.all()
        jugadores_serializer = JugadorSerializer(jugadores, many=True)
        return JsonResponse(jugadores_serializer.data, safe=False)
