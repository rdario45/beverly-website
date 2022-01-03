import { Form, Col, Row, Button, Stack } from "react-bootstrap";
import { VscAdd, VscClose } from "react-icons/vsc"
import BasicTimePicker from "./TimePicker"
import API from "../api/index"

function CrearCitaForm({ selectedDate, handleDateChange, cita, dispatch }) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onSave = () => {
        const nCita = Object.assign(cita, {
            hora: selectedDate.getTime().toString()
        })
        API.guardarCita(nCita).then(body =>
            dispatch({
                type: "form",
                payload: Object.assign({
                    clienta: "",
                    agenda: "",
                    servicios: [{ nombre: "", valor: "" }]
                })
            })
        );
    }

    const setClienta = (clienta) => {
        dispatch({
            type: "form",
            payload: Object.assign(cita, { clienta })
        })
    }

    const setAgenda = (agenda) => {
        dispatch({
            type: "form",
            payload: Object.assign(cita, { agenda })
        })
    }

    const handleChange = (attrib, key, value) => {
        cita.servicios[key][attrib] = value;
        dispatch({
            type: "form",
            payload: Object.assign(cita, { servicios: cita.servicios })
        })
    }

    const addServicio = () => {
        dispatch({
            type: "form",
            payload: Object.assign(cita, { servicios: cita.servicios.concat({}) })
        })
    }

    const reduceServicio = () => {
        cita.servicios.pop()
        dispatch({
            type: "form",
            payload: Object.assign(cita, { servicios: cita.servicios })
        })
    }

    return (
        <Stack direction="vertical" gap={5}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formHora">
                    <Form.Label> Hora: </Form.Label>
                    <Row style={{ padding: "10px 10px 10px 10px" }}>
                        <BasicTimePicker handleDateChange={handleDateChange} selectedHour={selectedDate} />
                    </Row>
                </Form.Group>

                <Form.Group controlId="formAgenda">
                    <Form.Label> Agenda </Form.Label>
                    <Form.Select size="lg" value={cita.agenda} onChange={e => setAgenda(e.target.value)}>
                        <option ></option>
                        <option value="NATALIA">Natalia</option>
                        <option value="MARIA ALJANDRA">Mra. Alejandra</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formCliente">
                    <Form.Label> Clienta </Form.Label>
                    <Form.Control size="lg" value={cita.clienta} onChange={e => setClienta(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label> Servicios </Form.Label>
                    {cita.servicios.map((servicio, key) =>
                        <Row key={key} style={{
                            paddingBottom: "5px"
                        }}>
                            <Col md={7}>
                                <Form.Control size="lg" value={servicio.nombre} placeholder="Nombre" onChange={e => handleChange("nombre", key, e.target.value)} />
                            </Col>
                            <Col>
                                <Form.Control type="number" size="lg" value={servicio.valor} placeholder="Valor" onChange={e => handleChange("valor", key, e.target.value)} />
                            </Col>
                        </Row>
                    )}

                    <Stack direction="horizontal">
                        {cita.servicios.length > 1 && <Button size="lg" onClick={() => reduceServicio()} ><VscClose /></Button>}
                        <div className="ms-auto">  <Button size="lg" onClick={() => addServicio()}><VscAdd /></Button></div>
                    </Stack>

                </Form.Group>
            </Form>
            <Button size="lg" style={{ width: "100%" }} variant="primary" onClick={() => onSave()}> Guardar </Button>
        </Stack>
    )
}

export default CrearCitaForm;