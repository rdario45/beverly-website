
import { Table, Button } from "react-bootstrap"
import { VscTrash, VscEdit } from "react-icons/vsc"

const AgendaTable = ({ id, manicurista, citas, onDelete, onUpdate, onDeleteAgenda }) => {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>HORA</th>
                        <th>CLIENTA</th>
                        <th>SERVICIOS</th>
                        <th colSpan="2"></th>
                    </tr>
                </thead>
                <tbody>
                    {citas.map((cita, key) => {
                        const servicios = cita.servicios.map(servicio => `${servicio.nombre} `);
                        const total = cita.servicios.map(s => parseInt(s.valor)).reduce((ant, sig) => (ant + sig), 0);
                        const time = new Date(parseInt(cita.hora));
                        const sTime = `${time.getHours()}:00`
                        const total2 = '$' + total.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

                        return (
                            <tr key={key}>
                                <td>{sTime}</td>
                                <td>{cita.clienta}</td>
                                <td>{servicios} = {total2}</td>
                                <td><Button onClick={ () => onDelete(id, cita.id)}> <VscTrash /></Button></td>
                                <td><Button onClick={ () => onUpdate(cita)}> <VscEdit /></Button></td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </Table>
        </>
    )
}

export default AgendaTable;