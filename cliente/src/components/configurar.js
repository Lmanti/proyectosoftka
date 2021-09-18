import React, {Component} from "react";

export class Configurar extends Component {

    constructor() {
        super()
    }

    handleInput(e) {
        
    }

    render() {
        return (
            <div>
                <h2>Configuración</h2>
                <form>
                    <label>Creación de ronda</label>
                    <div>
                        <label>Categoria</label>
                        <label>Nombre</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Premio</label>
                        <label>Nombre</label>
                        <input type="text"/>
                        <label>Descripción</label>
                        <input type="text" />
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}