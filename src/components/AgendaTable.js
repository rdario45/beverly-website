
import { Table } from "react-bootstrap"
import { VscTrash, VscEdit } from "react-icons/vsc"

const AgendaTable = ({ id, manicurista, citas, onDelete, onUpdate }) => {
    return (
        <>
            <div> { manicurista } </div>
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
                        return (
                            <tr key={key}>
                                <td>{sTime}</td>
                                <td>{cita.clienta}</td>
                                <td>{servicios}${total}</td>
                                <td ><button onClick={ () => onDelete(id, cita.id)}> <VscTrash /></button></td>
                                <td><button onClick={ () => onUpdate(cita)}> <VscEdit /></button></td>
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