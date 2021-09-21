import { CARGAR_PREGUNTAS, CARGAR_RONDAS } from "../actions";

const INITIAL_STATE = {
    rondas: [],
    rondas_todo: [],
    preguntas: [],
    categoria_1: [],
    categoria_2: [],
    categoria_3: [],
    categoria_4: [],
    categoria_5: []
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CARGAR_RONDAS:
            return {
                ...state,
                rondas: action.payload.map(n => n.categoria.nombre),
                rondas_todo: action.payload
            }
        case CARGAR_PREGUNTAS:
            let categorias = new Set(action.payload.map(n => n.categoria.nombre))
            return {
                ...state,
                preguntas: action.payload,
                categoria_1: action.payload.filter(n => n.categoria.nombre === Array.from(categorias)[0]),
                categoria_2: action.payload.filter(n => n.categoria.nombre === Array.from(categorias)[1]),
                categoria_3: action.payload.filter(n => n.categoria.nombre === Array.from(categorias)[2]),
                categoria_4: action.payload.filter(n => n.categoria.nombre === Array.from(categorias)[3]),
                categoria_5: action.payload.filter(n => n.categoria.nombre === Array.from(categorias)[4])
            }
        default:
            return state
    }
}

export default rootReducer