import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { crearRonda } from "../actions";

const validar = (input) => {
    if (input.nombre_categoria_r1 && input.nombre_categoria_r2 && input.nombre_categoria_r3 && input.nombre_categoria_r4 && input.nombre_categoria_r5 &&
    input.titulo_premio_r1 && input.titulo_premio_r2 && input.titulo_premio_r3 && input.titulo_premio_r4 && input.titulo_premio_r5 &&
    input.descripcion_premio_r1 && input.descripcion_premio_r2 && input.descripcion_premio_r3 && input.descripcion_premio_r4 && input.descripcion_premio_r5) {
        return true
    } else {
        return false
    }
}

const Configurar = () => {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        nombre_categoria_r1: "",
        titulo_premio_r1: "",
        descripcion_premio_r1: "",
        nombre_categoria_r2: "",
        titulo_premio_r2: "",
        descripcion_premio_r2: "",
        nombre_categoria_r3: "",
        titulo_premio_r3: "",
        descripcion_premio_r3: "",
        nombre_categoria_r4: "",
        titulo_premio_r4: "",
        descripcion_premio_r4: "",
        nombre_categoria_r5: "",
        titulo_premio_r5: "",
        descripcion_premio_r5: ""
    })

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let info = [
            {
                categoria: {
                    nombre: input.nombre_categoria_r1
                },
                premio: {
                    nombre: input.titulo_premio_r1,
                    descripcion: input.descripcion_premio_r1
                }
            },
            {
                categoria: {
                    nombre: input.nombre_categoria_r2
                },
                premio: {
                    nombre: input.titulo_premio_r2,
                    descripcion: input.descripcion_premio_r2
                }
            },
            {
                categoria: {
                    nombre: input.nombre_categoria_r3
                },
                premio: {
                    nombre: input.titulo_premio_r3,
                    descripcion: input.descripcion_premio_r3
                }
            },
            {
                categoria: {
                    nombre: input.nombre_categoria_r4
                },
                premio: {
                    nombre: input.titulo_premio_r4,
                    descripcion: input.descripcion_premio_r4
                }
            },
            {
                categoria: {
                    nombre: input.nombre_categoria_r5
                },
                premio: {
                    nombre: input.titulo_premio_r5,
                    descripcion: input.descripcion_premio_r5
                }
            }
        ]
        if (validar(input)) {
            dispatch(crearRonda(info))
            console.log(info)
            window.location.href = "/configuracion/preguntas"
        }
        else alert("Hay campos vacios!")     
    }

    console.log(input)

    return (
        <div>
            <h2>Configuración</h2>
            <Link to="/" >Volver</Link>
            <form onChange={handleInput} onSubmit={handleSubmit} >
                <h3>Creación de rondas</h3>
                <div>
                    <h4>Ronda 1</h4>
                    <div>
                        <h5>Categoria</h5>
                        <label>Nombre de la categoria: </label>
                        <input type="text" name="nombre_categoria_r1" />
                    </div>
                    <div>
                        <h5>Premio</h5>
                        <label>Titulo del premio: </label>
                        <input type="text" name="titulo_premio_r1" />
                        <label>Descripción: </label>
                        <textarea name="descripcion_premio_r1" cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div>
                    <h4>Ronda 2</h4>
                    <div>
                        <h5>Categoria</h5>
                        <label>Nombre de la categoria: </label>
                        <input type="text" name="nombre_categoria_r2" />
                    </div>
                    <div>
                        <h5>Premio</h5>
                        <label>Titulo del premio: </label>
                        <input type="text" name="titulo_premio_r2" />
                        <label>Descripción: </label>
                        <textarea name="descripcion_premio_r2" cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div>
                    <h4>Ronda 3</h4>
                    <div>
                        <h5>Categoria</h5>
                        <label>Nombre de la categoria: </label>
                        <input type="text" name="nombre_categoria_r3" />
                    </div>
                    <div>
                        <h5>Premio</h5>
                        <label>Titulo del premio: </label>
                        <input type="text" name="titulo_premio_r3" />
                        <label>Descripción: </label>
                        <textarea name="descripcion_premio_r3" cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div>
                    <h4>Ronda 4</h4>
                    <div>
                        <h5>Categoria</h5>
                        <label>Nombre de la categoria: </label>
                        <input type="text" name="nombre_categoria_r4" />
                    </div>
                    <div>
                        <h5>Premio</h5>
                        <label>Titulo del premio: </label>
                        <input type="text" name="titulo_premio_r4" />
                        <label>Descripción: </label>
                        <textarea name="descripcion_premio_r4" cols="30" rows="5"></textarea>
                    </div>
                </div>
                <div>
                    <h4>Ronda 5</h4>
                    <div>
                        <h5>Categoria</h5>
                        <label>Nombre de la categoria: </label>
                        <input type="text" name="nombre_categoria_r5" />
                    </div>
                    <div>
                        <h5>Premio</h5>
                        <label>Titulo del premio: </label>
                        <input type="text" name="titulo_premio_r5" />
                        <label>Descripción: </label>
                        <textarea name="descripcion_premio_r5" cols="30" rows="5"></textarea>
                    </div>
                </div>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Configurar