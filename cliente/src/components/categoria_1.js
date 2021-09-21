import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cargarPreguntas, cargarRondas, crearUsuario } from "../actions";

const Categoria_1 = () => {

    const dispatch = useDispatch()

    const [preguntaActual, setPreguntaActual] = useState(Math.floor(Math.random() * (5 - 0) + 0))
    const [pregunta, setPregunta] = useState([])
    const [puntos, setPuntos] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [input, setInput] = useState("")
    const [premio, setPremio] = useState([])
    const preguntas_todas = useSelector(state => [state.categoria_1, state.categoria_2, state.categoria_3, state.categoria_4, state.categoria_5])
    const rondas_todas = useSelector(state => state.rondas_todo)
    const [ronda, setRonda] = useState({})
    const [p, setP] = useState({})
    const [indice, setIndice] = useState(0)
    const [stage, setStage] = useState({})
    const [logrado, setLogrado] = useState(false)

    useEffect(() => {
        dispatch(cargarPreguntas())
        dispatch(cargarRondas())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (rondas_todas.length) setRonda({
            nombre: rondas_todas[indice].categoria.nombre,
            premio: rondas_todas[indice].premio
        })
    }, [indice, rondas_todas])

    useEffect(() => {
        setP(preguntas_todas[indice])
    }, [indice, preguntas_todas])

    useEffect(() => {
        setStage({
            ronda: ronda,
            preguntas: p
        })
    }, [ronda, p])

    useEffect(() => {
        if (Object.keys(stage).length) setPregunta(stage.preguntas)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stage])

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleClick = (e, escorrecta) => {
        e.preventDefault()
        if (escorrecta) {
            let acumulado = puntos + pregunta[preguntaActual].puntos
            setPuntos(acumulado)
        } else {
            setGameOver(true)
            let jugador = {
                nombre: input,
                puntos: puntos,
                premio: premio
            }
            return dispatch(crearUsuario(jugador))
        }
        if (pregunta.length === 1 && indice < 5) {
            let indiceNuevo = indice + 1
            setIndice(indiceNuevo)
        }
        else if (pregunta.length === 1 && indice === 5) setLogrado(true)
        let nueva_lista_preguntas = pregunta.filter(n => n.id !== pregunta[preguntaActual].id)
        setPregunta(nueva_lista_preguntas)
        let indiceActual = Math.floor(Math.random() * (nueva_lista_preguntas.length - 0) + 0)
        setPreguntaActual(indiceActual)
    }
    
    // console.log(input)

    return (
        <div>
            <div>
                <h2>Puntaje: {puntos}</h2>
            </div>
            {
                gameOver && <div>
                    <h2>Perdiste!</h2>
                    <div>
                        <label>Nombre del jugador: </label>
                        <input onChange={handleInput} type="text" />
                    </div>
                </div>
            }
            {
                logrado && <div>
                    <h2>Lo lograste!, limpiaste todas las rondas!!</h2>
                    <div>
                        <label>Nombre del jugador: </label>
                        <input onChange={handleInput} type="text" />
                    </div>
                </div>
            }
            {
                Object.keys(stage).length && pregunta.length && stage.ronda.nombre && !gameOver && !logrado && <div>
                    <h1>{stage.ronda.nombre}</h1>
                    
                    <h3>{pregunta[preguntaActual].descripcion}</h3>
                    <div>
                        {
                            pregunta[preguntaActual].opciones.map(n => <button key={n.id} onClick={(e) => handleClick(e, n.escorrecta)} value={n.escorrecta} >{n.descripcion}</button>)
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Categoria_1