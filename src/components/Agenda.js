
import { Table } from "react-bootstrap"
import { VscTrash, VscEdit, VscAdd } from "react-icons/vsc"

const Agenda = ({ id, manicurista, citas, onDelete }) => {
    return (
        <div>
            <div> {manicurista} <button><VscAdd /></button> </div>
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
                                <td>{servicios}
                                    ${total}</td>
                                <td onClick={ () => onDelete(id, cita.id) }><button><VscTrash /></button></td>
                                <td><button><VscEdit /></button></td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </Table>
        </div>

    )
}

export default Agenda;