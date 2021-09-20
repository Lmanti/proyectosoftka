import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Preguntas y respuestas!</h1>
            <Link to="/configuracion" >Configurar</Link>
            <Link>Jugar</Link>
        </div>
    )
}

export default Home