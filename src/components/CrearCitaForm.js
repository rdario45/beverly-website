import { Form, Col, Row, Button, Stack, InputGroup } from "react-bootstrap";
import { VscAdd, VscClose, VscCalendar } from "react-icons/vsc"
import BasicTimePicker from "./TimePicker"

function CrearCitaForm({ fecha, handleFecha, cita, onSave, setAgenda, setCliente, handleChange, subService, addService }) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Stack direction="vertical" gap={5}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formHora">
                    <Form.Label> Hora: </Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <VscCalendar />
                        </InputGroup.Text>
                        <div style={{
                            paddingLeft: "5px"
                        }}>
                            <BasicTimePicker handleDateChange={handleFecha} selectedHour={fecha} />
                        </div>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formAgenda">
                    <Form.Label> Agenda </Form.Label>
                    <Form.Select size="lg" value={cita.agenda} onChange={e => setAgenda(e.target.value, cita)}>
                        <option ></option>
                        <option value="NATALIA">Natalia</option>
                        <option value="MARIA JOSE">Mra. Jose</option>
                        <option value="PESTAÑAS">Pestañas</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formCliente">
                    <Form.Label> Cliente </Form.Label>
                    <Form.Control size="lg" value={cita.cliente} onChange={e => setCliente(e.target.value, cita)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label> Servicios </Form.Label>
                    {cita.servicios.map((servicio, key) =>
                        <Row key={key} style={{
                            paddingBottom: "10px"
                        }}>
                            <Col md={7} sm={7}>
                                <Form.Control size="lg" value={servicio.nombre} placeholder="Nombre" onChange={e => handleChange("nombre", key, e.target.value, cita)} />
                            </Col>
                            <Col>
                                <Form.Control type="number" size="lg" value={servicio.valor} placeholder="Valor" onChange={e => handleChange("valor", key, e.target.value, cita)} />
                            </Col>
                        </Row>
                    )}
                    <Stack direction="horizontal">
                        {cita.servicios.length > 1 && <Button size="lg" onClick={() => subService(cita)} ><VscClose /></Button>}
                        <div className="ms-auto">  <Button size="lg" onClick={() => addService(cita)}><VscAdd /></Button></div>
                    </Stack>
                </Form.Group>                
            </Form>
            <Button size="lg" style={{ width: "100%" }} variant="primary" onClick={() => onSave(cita)}> Guardar </Button>
        </Stack>
    )
}

export default CrearCitaForm;