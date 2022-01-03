import { Form, Col, Row, Button, Stack } from "react-bootstrap";
import { VscAdd, VscClose } from "react-icons/vsc"
import BasicTimePicker from "./TimePicker"

function CrearCitaForm({ fecha, updateFecha, cita, onSave, setAgenda, setClienta, handleChange, lessServicios, moreServicios }) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Stack direction="vertical" gap={5}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formHora">
                    <Form.Label> Hora: </Form.Label>
                    <Row style={{ padding: "10px 10px 10px 10px" }}>
                        <BasicTimePicker handleDateChange={updateFecha} selectedHour={fecha} />
                    </Row>
                </Form.Group>

                <Form.Group controlId="formAgenda">
                    <Form.Label> Agenda </Form.Label>
                    <Form.Select size="lg" value={cita.agenda} onChange={e => setAgenda(e.target.value, cita)}>
                        <option ></option>
                        <option value="NATALIA">Natalia</option>
                        <option value="MARIA JOSE">Mra. Jose</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formCliente">
                    <Form.Label> Clienta </Form.Label>
                    <Form.Control size="lg" value={cita.clienta} onChange={e => setClienta(e.target.value, cita)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label> Servicios </Form.Label>
                    {cita.servicios.map((servicio, key) =>
                        <Row key={key} style={{
                            paddingBottom: "5px"
                        }}>
                            <Col md={7}>
                                <Form.Control size="lg" value={servicio.nombre} placeholder="Nombre" onChange={e => handleChange("nombre", key, e.target.value, cita)} />
                            </Col>
                            <Col>
                                <Form.Control type="number" size="lg" value={servicio.valor} placeholder="Valor" onChange={e => handleChange("valor", key, e.target.value, cita)} />
                            </Col>
                        </Row>
                    )}

                    <Stack direction="horizontal">
                        {cita.servicios.length > 1 && <Button size="lg" onClick={() => lessServicios(cita)} ><VscClose /></Button>}
                        <div className="ms-auto">  <Button size="lg" onClick={() => moreServicios(cita)}><VscAdd /></Button></div>
                    </Stack>

                </Form.Group>
            </Form>
            <Button size="lg" style={{ width: "100%" }} variant="primary" onClick={() => onSave(cita)}> Guardar </Button>
        </Stack>
    )
}

export default CrearCitaForm;