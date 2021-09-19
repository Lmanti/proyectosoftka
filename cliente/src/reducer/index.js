import { CREAR_RONDA } from "../actions";

const INITIAL_STATE = {
    categorias: ["fácil", "medio", "difícil", "pro", "leyenda"]
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CREAR_RONDA:
            return {
                ...state,
                categorias: action.payload
            }
        default:
            return state
    }
}

export default rootReducer