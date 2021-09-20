import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cargarRondas, crearPreguntas } from "../actions";

const Preguntas = () => {

    const categorias = useSelector(state => state.rondas)
    const dispatch = useDispatch()

    const [input, setInput] = useState({})

    useEffect(() => {
        console.log("entra")
        dispatch(cargarRondas())
    }, [])

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let info = []
        for(let i = 0; i < categorias.length; i++) {
            let categoria = {
                nombre: categorias[i],
                preguntas: []
            }
            for(let j = 1; j <= 5; j++) {
                let pregunta = {
                    descripcion: input[`pregunta_${j}_${categorias[i]}`],
                    opciones: {
                        opcion_A: {
                            descripcion: input[`opcion_respuesta_${j}_A_${categorias[i]}`],
                            escorrecta: input[`opcion_respuesta_${j}_A_${categorias[i]}`] === input[input[`es_correcta_${j}_${categorias[i]}`]] ? true : false
                        },
                        opcion_B: {
                            descripcion: input[`opcion_respuesta_${j}_B_${categorias[i]}`],
                            escorrecta: input[`opcion_respuesta_${j}_B_${categorias[i]}`] === input[input[`es_correcta_${j}_${categorias[i]}`]] ? true : false
                        }, 
                        opcion_C: {
                            descripcion: input[`opcion_respuesta_${j}_C_${categorias[i]}`],
                            escorrecta: input[`opcion_respuesta_${j}_C_${categorias[i]}`] === input[input[`es_correcta_${j}_${categorias[i]}`]] ? true : false
                        },
                        opcion_D: {
                            descripcion: input[`opcion_respuesta_${j}_D_${categorias[i]}`],
                            escorrecta: input[`opcion_respuesta_${j}_D_${categorias[i]}`] === input[input[`es_correcta_${j}_${categorias[i]}`]] ? true : false
                        }
                    },
                    puntos: input[`puntos_pregunta_${j}_${categorias[i]}`]
                }
                categoria.preguntas.push(pregunta)
            }
            info.push(categoria)
        }
        dispatch(crearPreguntas(info))
        // window.location.href = "/"
    }

    return (
        <div>
            <h1>Preguntas</h1>
            <form onChange={handleInput} onSubmit={handleSubmit} >
                {
                    categorias && categorias.map((n, indice) => <div key={indice} >
                        <h2>{n}</h2>
                        <div>
                            <h3>pregunta 1</h3>
                            <div>
                                <label>Pregunta: </label>
                                <input type="text" name={`pregunta_1_${n}`} />
                                <label>Puntos: </label>
                                <input type="number" name={`puntos_pregunta_1_${n}`} />
                            </div>
                            <div>
                                <label>Opciones de respuesta: </label>
                                <label>A. </label>
                                <input type="text" name={`opcion_respuesta_1_A_${n}`} />
                                <input type="radio" value={`opcion_respuesta_1_A_${n}`} name={`es_correcta_1_${n}`} />
                                <label>B. </label>
                                <input type="text" name={`opcion_respuesta_1_B_${n}`} />
                                <input type="radio" value={`opcion_respuesta_1_B_${n}`} name={`es_correcta_1_${n}`} />
                                <label>C. </label>
                                <input type="text" name={`opcion_respuesta_1_C_${n}`} />
                                <input type="radio" value={`opcion_respuesta_1_C_${n}`} name={`es_correcta_1_${n}`} />
                                <label>D. </label>
                                <input type="text" name={`opcion_respuesta_1_D_${n}`} />
                                <input type="radio" value={`opcion_respuesta_1_D_${n}`} name={`es_correcta_1_${n}`} />
                            </div>
                        </div>
                        <div>
                            <h3>pregunta 2</h3>
                            <div>
                                <label>Pregunta: </label>
                                <input type="text" name={`pregunta_2_${n}`} />
                                <label>Puntos: </label>
                                <input type="number" name={`puntos_pregunta_2_${n}`} />
                            </div>
                            <div>
                                <label>Opciones de respuesta: </label>
                                <label>A. </label>
                                <input type="text" name={`opcion_respuesta_2_A_${n}`} />
                                <input type="radio" value={`opcion_respuesta_2_A_${n}`} name={`es_correcta_2_${n}`} />
                                <label>B. </label>
                                <input type="text" name={`opcion_respuesta_2_B_${n}`} />
                                <input type="radio" value={`opcion_respuesta_2_B_${n}`} name={`es_correcta_2_${n}`} />
                                <label>C. </label>
                                <input type="text" name={`opcion_respuesta_2_C_${n}`} />
                                <input type="radio" value={`opcion_respuesta_2_C_${n}`} name={`es_correcta_2_${n}`} />
                                <label>D. </label>
                                <input type="text" name={`opcion_respuesta_2_D_${n}`} />
                                <input type="radio" value={`opcion_respuesta_2_D_${n}`} name={`es_correcta_2_${n}`} />
                            </div>
                        </div>
                        <div>
                            <h3>pregunta 3</h3>
                            <div>
                                <label>Pregunta: </label>
                                <input type="text" name={`pregunta_3_${n}`} />
                                <label>Puntos: </label>
                                <input type="number" name={`puntos_pregunta_3_${n}`} />
                            </div>
                            <div>
                                <label>Opciones de respuesta: </label>
                                <label>A. </label>
                                <input type="text" name={`opcion_respuesta_3_A_${n}`} />
                                <input type="radio" value={`opcion_respuesta_3_A_${n}`} name={`es_correcta_3_${n}`} />
                                <label>B. </label>
                                <input type="text" name={`opcion_respuesta_3_B_${n}`} />
                                <input type="radio" value={`opcion_respuesta_3_B_${n}`} name={`es_correcta_3_${n}`} />
                                <label>C. </label>
                                <input type="text" name={`opcion_respuesta_3_C_${n}`} />
                                <input type="radio" value={`opcion_respuesta_3_C_${n}`} name={`es_correcta_3_${n}`} />
                                <label>D. </label>
                                <input type="text" name={`opcion_respuesta_3_D_${n}`} />
                                <input type="radio" value={`opcion_respuesta_3_D_${n}`} name={`es_correcta_3_${n}`} />
                            </div>
                        </div>
                        <div>
                            <h3>pregunta 4</h3>
                            <div>
                                <label>Pregunta: </label>
                                <input type="text" name={`pregunta_4_${n}`} />
                                <label>Puntos: </label>
                                <input type="number" name={`puntos_pregunta_4_${n}`} />
                            </div>
                            <div>
                                <label>Opciones de respuesta: </label>
                                <label>A. </label>
                                <input type="text" name={`opcion_respuesta_4_A_${n}`} />
                                <input type="radio" value={`opcion_respuesta_4_A_${n}`} name={`es_correcta_4_${n}`} />
                                <label>B. </label>
                                <input type="text" name={`opcion_respuesta_4_B_${n}`} />
                                <input type="radio" value={`opcion_respuesta_4_B_${n}`} name={`es_correcta_4_${n}`} />
                                <label>C. </label>
                                <input type="text" name={`opcion_respuesta_4_C_${n}`} />
                                <input type="radio" value={`opcion_respuesta_4_C_${n}`} name={`es_correcta_4_${n}`} />
                                <label>D. </label>
                                <input type="text" name={`opcion_respuesta_4_D_${n}`} />
                                <input type="radio" value={`opcion_respuesta_4_D_${n}`} name={`es_correcta_4_${n}`} />
                            </div>
                            <div>
                            <h3>pregunta 5</h3>
                            <div>
                                <label>Pregunta: </label>
                                <input type="text" name={`pregunta_5_${n}`} />
                                <label>Puntos: </label>
                                <input type="number" name={`puntos_pregunta_5_${n}`} />
                            </div>
                            <div>
                                <label>Opciones de respuesta: </label>
                                <label>A. </label>
                                <input type="text" name={`opcion_respuesta_5_A_${n}`} />
                                <input type="radio" value={`opcion_respuesta_5_A_${n}`} name={`es_correcta_5_${n}`} />
                                <label>B. </label>
                                <input type="text" name={`opcion_respuesta_5_B_${n}`} />
                                <input type="radio" value={`opcion_respuesta_5_B_${n}`} name={`es_correcta_5_${n}`} />
                                <label>C. </label>
                                <input type="text" name={`opcion_respuesta_5_C_${n}`} />
                                <input type="radio" value={`opcion_respuesta_5_C_${n}`} name={`es_correcta_5_${n}`} />
                                <label>D. </label>
                                <input type="text" name={`opcion_respuesta_5_D_${n}`} />
                                <input type="radio" value={`opcion_respuesta_5_D_${n}`} name={`es_correcta_5_${n}`} />
                            </div>
                        </div>
                        </div>
                    </div>)
                }
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Preguntas