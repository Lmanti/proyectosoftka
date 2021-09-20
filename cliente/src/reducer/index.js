import { CARGAR_RONDAS, CREAR_RONDA } from "../actions";

const INITIAL_STATE = {
    rondas: []
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CARGAR_RONDAS:
            console.log(action.payload)
            return {
                ...state,
                rondas: action.payload.map(n => n.categoria.nombre)
            }
        default:
            return state
    }
}

export default rootReducer