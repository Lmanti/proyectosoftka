export const CREAR_RONDA = "CREAR_RONDA"

export const crearRonda = (info) => dispatch => fetch("http://localhost:8000/rondas", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(info)
}).then(res => res.json()).then(json => dispatch({type: CREAR_RONDA, payload: json}))