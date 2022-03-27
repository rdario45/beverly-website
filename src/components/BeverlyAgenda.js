import { Table,  Badge } from "react-bootstrap"
import { VscTrash, VscEdit } from "react-icons/vsc"
import WhatsAppIcon from "./WhatsAppIcon";

const BeverlyAgenda = ({ id, citas, onDelete, onUpdate }) => {
    return (
        <Table bordered hover>
            <thead>
                <tr>
                    <th>HORA</th>
                    <th>CLIENTE</th>
                    <th>SERVICIOS</th>
                    <th colSpan="2"></th>
                </tr>
            </thead>
            <tbody>
                {citas.sort((c1, c2) => c1.hora > c2.hora)
                .map((cita, i) => {
                    const servicios = cita.servicios.map((servicio, i) => <span key={i}><Badge bg="danger">{` ${servicio.nombre} `}</Badge>{' '}</span>);
                    const time = new Date(parseInt(cita.hora));
                    const xTime = `${time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`
                    const total = cita.servicios.map(s => parseInt(s.valor)).reduce((ant, sig) => (ant + sig), 0);
                    const xTotal = <Badge bg="secondary"> {'$' + total.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </Badge>
                    return (
                        <tr key={i}>
                            <td>{xTime}</td>
                            <td>{cita.cliente} <WhatsAppIcon phone={cita.telefono}/></td>
                            <td>{servicios} {xTotal}</td>
                            <td><VscTrash onClick={() => onDelete(cita, id)} /></td>
                            <td><VscEdit onClick={() => onUpdate(cita)} /></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default BeverlyAgenda;