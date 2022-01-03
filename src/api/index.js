import { geAccessToken } from '../store/index'

const API = {
    sendCode: (phone) => Promise.resolve({ user: {name: "nata", phone: "+573007988200" } }),    
    signin: (phone, code) => Promise.resolve({ data:{access_token: 123456}, user:{name:"nata", phone:"+573007988200"}}),    
    signup: (name, phone, code) => Promise.resolve({ data: { access_token: 123456 }, user: {name: "nata", phone: "+573007988200" } }),
    agendas: (fecha) => fetch(`${process.env.REACT_APP_API}/agendas/${fecha}?access_token=${geAccessToken()}`).then(body => body.json()),
    eliminarCita: (citaId) => fetch(`${process.env.REACT_APP_API}/citas/${citaId}?access_token=${geAccessToken()}`, {method: "DELETE"}).then(body => body.json()),
    guardarCita: (cita) => fetch(`${process.env.REACT_APP_API}/citas?access_token=${geAccessToken()}`, {method: "POST", headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(cita)}).then(body => body.json()),
}

export default API;