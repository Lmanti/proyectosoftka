from rest_framework import serializers
from JuegoPreguntas.models import Categoria, Opcion, Pregunta, Premio, Jugador, Ronda

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ('id', 'nombre')

class OpcionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Opcion
        fields = ('id', 'descripcion', 'escorrecta')

class PreguntaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pregunta
        fields = ('id', 'descripcion', 'opciones', 'puntos', 'categoria')

class PremioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Premio
        fields = ('id', 'nombre', 'descripcion')

class RondaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ronda
        fields = ('id', 'categoria', 'premio')

class JugadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jugador
        fields = ('id', 'nombre', 'puntos', 'premios')