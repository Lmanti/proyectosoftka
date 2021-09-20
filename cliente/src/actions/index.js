export const CREAR_RONDA = "CREAR_RONDA"
export const CARGAR_RONDAS = "CARGAR_RONDAS"
export const CREAR_PREGUNTAS = "CREAR_PREGUNTAS"

export const crearRonda = (info) => dispatch => fetch("http://localhost:8000/rondas", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(info)
}).then(res => res.json()).then(json => dispatch({type: CREAR_RONDA, payload: json}))

export const crearPreguntas = (info) => dispatch => fetch("http://localhost:8000/preguntas", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(info)
}).then(res => res.json()).then(json => dispatch({type: CREAR_PREGUNTAS, payload: json}))

export const cargarRondas = () => dispatch => fetch("http://localhost:8000/rondas", {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}).then(res => res.json()).then(json => {
    console.log(json)
    return dispatch({type: CARGAR_RONDAS, payload: json})
})