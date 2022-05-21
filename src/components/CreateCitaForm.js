import { Form, Col, Row, Button, Stack, InputGroup } from "react-bootstrap";
import { VscAdd, VscClose, VscCalendar } from "react-icons/vsc"
import { BsTelephonePlus, BsPercent } from "react-icons/bs"
import InputTimePicker from "./TimeInputPicker";

const CreateForm = ({
    seledtedDate,
    updateFecha,
    cita,
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

    const total = cita.servicios.map(s => parseInt(s.valor)).reduce((ant, sig) => (ant + sig), 0);
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
                        <Form.Select size="lg" value={cita.agenda} onChange={e => setAgenda(e.target.value, cita)}>
                            <option value="NATALIA">Natalia</option>
                            <option value="LIZETH">Lizeth</option>
                        </Form.Select>
                        <InputGroup.Text>
                            {cita.porcentaje} <BsPercent />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formCliente">
                    <Form.Label> Cliente </Form.Label>
                    <InputGroup>
                        {!isPhoneAvailable && <Form.Control size="lg" value={cita.cliente} onChange={e => setClient(e.target.value, cita)} />}
                        {isPhoneAvailable && <Col md={7} sm={7}>
                            <Form.Control size="lg" value={cita.cliente} onChange={e => setClient(e.target.value, cita)} />
                        </Col>}
                        <InputGroup.Text onClick={e => setPhoneAvailable(!isPhoneAvailable)}>
                            <BsTelephonePlus />
                        </InputGroup.Text>
                        {isPhoneAvailable && <Form.Control size="md" value={cita.telefono} onChange={e => setTelefono(e.target.value, cita)} />}
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Servicios </Form.Label>
                    {cita.servicios.map((servicio, key) =>
                        <Row key={key} style={{
                            paddingBottom: "10px"
                        }}>
                            <Col md={7} sm={7}>
                                <Form.Control size="lg" value={servicio.nombre} placeholder="nombre" onChange={e => handleChangeServices("nombre", key, e.target.value, cita)} />
                            </Col>
                            <Col>
                                <Form.Control type="number" size="lg" value={servicio.valor} placeholder="valor" onChange={e => handleChangeServices("valor", key, e.target.value, cita)} />
                            </Col>
                        </Row>
                    )}
                    <Stack direction="horizontal">

                        {cita.servicios.length > 1 && <Button size="lg" onClick={() => removeService(cita)} ><VscClose /></Button>}

                        <div className="ms-auto">

                            <Button size="lg" onClick={() => addService(cita)}> <VscAdd />
                            </Button>

                        </div>

                    </Stack>
                </Form.Group>
            </Form>
            <Button size="lg" style={{ width: "100%" }} variant="primary" onClick={() => onSaveAppointment(cita)}> Guardar </Button>
        </Stack>
    )
}

export default CreateForm;