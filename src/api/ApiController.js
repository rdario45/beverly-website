const findAgenda = (args) => {
    const [fechaIni, fechaFin, accessToken] = args;
    return fetch(`${process.env.REACT_APP_API}/agendas/${fechaIni}/${fechaFin}?access_token=${accessToken}`);
}

const findChartPie = (args) => {
    const [fechaIni, fechaFin, accessToken] = args;
    return fetch(`${process.env.REACT_APP_API}/agendas/charts/pie/${fechaIni}/${fechaFin}?access_token=${accessToken}`);
}

const findChartBar = (args) => {
    const [fechaIni, fechaFin, accessToken] = args;
    return fetch(`${process.env.REACT_APP_API}/agendas/charts/bar/${fechaIni}/${fechaFin}?access_token=${accessToken}`);
}

const createAppointment = (args) => {
    const [cita, accessToken] = args;
    return fetch(`${process.env.REACT_APP_API}/rdario45/beverly-websiterdario45/beverly-website?access_token=${accessToken}`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(cita) });
} 

const updateAppointment = (args) => {
    const [cita, citaId, accessToken] = args;
    return fetch(`${process.env.REACT_APP_API}/citas/${citaId}?access_token=${accessToken}`, { method: "PUT", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(cita) });
} 

const deleteAppointment = (args) => {
    const [citaId, accessToken] = args;
   return fetch(`${process.env.REACT_APP_API}/citas/${citaId}?access_token=${accessToken}`, { method: "DELETE" });
}

export {
    findAgenda,
    findChartPie,
    findChartBar,
    createAppointment,
    updateAppointment,
    deleteAppointment
};