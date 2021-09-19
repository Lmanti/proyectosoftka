import React from "react";
import { useSelector } from "react-redux";

const Preguntas = () => {

    const categorias = useSelector(state => state.categorias)

    return (
        <div>
            <h1>Preguntas</h1>
            {
                categorias && categorias.map((n, indice) => <div key={indice} >
                    <h2>{n}</h2>
                    <div>
                        <h3>pregunta 1</h3>
                        <div>
                            <label>Pregunta: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Opciones de respuesta: </label>
                            <label>A. </label>
                            <input type="text" />
                            <input type="range" min="0" max="1" step="1" defaultValue="0" id="A" name={`es_correcta_${indice}`} />
                            <label>B. </label>
                            <input type="text" />
                            <input type="range" min="0" max="1" step="1" defaultValue="0" id="B" name={`es_correcta_${indice}`} />
                            <label>C. </label>
                            <input type="text" />
                            <input type="range" min="0" max="1" step="1" defaultValue="0" id="C" name={`es_correcta_${indice}`} />
                            <label>D. </label>
                            <input type="text" />
                            <input type="range" min="0" max="1" step="1" defaultValue="0" id="D" name={`es_correcta_${indice}`} />
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Preguntas