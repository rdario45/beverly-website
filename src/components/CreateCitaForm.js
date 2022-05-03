import { Form, Col, Row, Button, Stack, InputGroup } from "react-bootstrap";
import { VscAdd, VscClose, VscCalendar } from "react-icons/vsc"
import { BsTelephonePlus, BsPercent } from "react-icons/bs"
import InputTimePicker from "./TimeInputPicker";

const CreateForm = ({
    seledtedDate,
    updateFecha,
    appointment,
    onSaveAppointment,
    setAgenda,
    setClient,
    handleChangeServices,
    addService,
    removeService,
    isPhoneAvailable,
    setPhoneAvailable,
    setTelefono
}) => {
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
                        }}> <InputTimePicker handleDateChange={updateFecha} selectedHour={seledtedDate} /> </div>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formAgenda">
                    <InputGroup>
                        <Form.Select size="lg" value={appointment.agenda} onChange={e => setAgenda(e.target.value, appointment)}>
                            <option value="NATALIA">Natalia</option>
                            <option value="LIZETH">Lizeth</option>
                        </Form.Select>
                        <InputGroup.Text>
                            {appointment.porcentaje} <BsPercent />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formCliente">
                    <Form.Label> Cliente </Form.Label>
                    <InputGroup>
                        {!isPhoneAvailable && <Form.Control size="lg" value={appointment.cliente} onChange={e => setClient(e.target.value, appointment)} />}
                        {isPhoneAvailable && <Col md={7} sm={7}>
                            <Form.Control size="lg" value={appointment.cliente} onChange={e => setClient(e.target.value, appointment)} />
                        </Col>}
                        <InputGroup.Text onClick={e => setPhoneAvailable(!isPhoneAvailable)}>
                            <BsTelephonePlus />
                        </InputGroup.Text>
                        {isPhoneAvailable && <Form.Control size="md" value={appointment.telefono} onChange={e => setTelefono(e.target.value, appointment)} />}
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Servicios </Form.Label>
                    {appointment.servicios.map((servicio, key) =>
                        <Row key={key} style={{
                            paddingBottom: "10px"
                        }}>
                            <Col md={7} sm={7}>
                                <Form.Control size="lg" value={servicio.nombre} placeholder="nombre" onChange={e => handleChangeServices("nombre", key, e.target.value, appointment)} />
                            </Col>
                            <Col>
                                <Form.Control type="number" size="lg" value={servicio.valor} placeholder="valor" onChange={e => handleChangeServices("valor", key, e.target.value, appointment)} />
                            </Col>
                        </Row>
                    )}
                    <Stack direction="horizontal">
                        {appointment.servicios.length > 1 && <Button size="lg" onClick={() => removeService(appointment)} ><VscClose /></Button>}
                        <div className="ms-auto"><Button size="lg" onClick={() => addService(appointment)}><VscAdd /></Button> </div>
                    </Stack>
                </Form.Group>
            </Form>
            <Button size="lg" style={{ width: "100%" }} variant="primary" onClick={() => onSaveAppointment(appointment)}> Guardar </Button>
        </Stack>
    )
}

export default CreateForm;