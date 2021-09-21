export const CREAR_RONDA = "CREAR_RONDA"
export const CARGAR_RONDAS = "CARGAR_RONDAS"
export const CREAR_PREGUNTAS = "CREAR_PREGUNTAS"
export const CARGAR_PREGUNTAS = "CARGAR_PREGUNTAS"
export const CREAR_JUGADOR = "CARGAR_JUGADOR"
export const CARGAR_JUGADORES = "CARGAR_PREGUNTAS"

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

export const cargarPreguntas = () => dispatch => fetch("http://localhost:8000/preguntas").then(res => res.json()).then(json => dispatch({type: CARGAR_PREGUNTAS, payload: json}))

export const crearUsuario = (info) => dispatch => fetch("http://localhost:8000/jugadores", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(info)
}).then(res => res.json()).then(json => dispatch({type: CREAR_JUGADOR, payload: json}))

export const cargarUsuarios = () => dispatch => fetch("http://localhost:8000/jugadores").then(res => res.json()).then(json => dispatch({type: CARGAR_JUGADORES, payload: json}))