
import { Table, Button } from "react-bootstrap"
import { VscTrash, VscEdit } from "react-icons/vsc"

const AgendaTable = ({ id, citas, onDelete, onUpdate }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>HORA</th>
                    <th>CLIENTE</th>
                    <th>SERVICIOS</th>
                    <th colSpan="2"></th>
                </tr>
            </thead>
            <tbody>
                {citas.sort((c1, c2) => c1.hora > c2.hora ? 1 : -1).map((cita, key) => {
                    const servicios = cita.servicios.map(servicio => servicio.nombre).join(", ");
                    const total = cita.servicios.map(s => parseInt(s.valor)).reduce((ant, sig) => (ant + sig), 0);
                    const time = new Date(parseInt(cita.hora));
                    const xTime = `${time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`
                    const xTotal = '$' + total.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

                    return (
                        <tr key={key}>
                            <td>{xTime}</td>
                            <td>{cita.cliente}</td>
                            <td>{servicios}: {xTotal}</td>
                            <td><Button onClick={() => onDelete(cita, id)}> <VscTrash /></Button></td>
                            <td><Button onClick={() => onUpdate(cita)}> <VscEdit /></Button></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default AgendaTable;