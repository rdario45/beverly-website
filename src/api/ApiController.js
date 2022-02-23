const ApiController = {
    findAgenda: (fechaIni, fechaFin) => fetch(`${process.env.REACT_APP_API}/agendas/${fechaIni}/${fechaFin}?access_token=36975603-dd40-42dd-b758-7ce91183a4d9`).then(body => body.json()),
    findBalance: (fechaIni, fechaFin) => fetch(`${process.env.REACT_APP_API}/agendas/balance/${fechaIni}/${fechaFin}?access_token=36975603-dd40-42dd-b758-7ce91183a4d9`).then(body => body.json()),
    createAppointment: (cita) => fetch(`${process.env.REACT_APP_API}/citas?access_token=36975603-dd40-42dd-b758-7ce91183a4d9`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(cita) }).then(body => body.json()),
    updateAppointment: (cita, citaId) => fetch(`${process.env.REACT_APP_API}/citas/${citaId}?access_token=36975603-dd40-42dd-b758-7ce91183a4d9`, { method: "PUT", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(cita) }).then(body => body.json()),
    deleteAppointment: (citaId) => fetch(`${process.env.REACT_APP_API}/citas/${citaId}?access_token=36975603-dd40-42dd-b758-7ce91183a4d9`, { method: "DELETE" }).then(body => body.json()),
}

export default ApiController;