import { Form, Col, Row, Button } from "react-bootstrap";
import BasicTimePicker from "./TimePicker"
import { VscAdd, VscClose } from "react-icons/vsc"
import API from "../api/index"

function CrearCitaForm({ selectedDate, handleDateChange, cita, dispatch }) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onSave = () => {
        const nCita = Object.assign(cita,{
                hora: selectedDate.getTime().toString()
            })
        API.guardarCita(nCita).then(body => { });
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
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formPlaintextEmail">
                    <Form.Label> Hora: </Form.Label>
                    <BasicTimePicker handleDateChange={handleDateChange} selectedHour={selectedDate} />
                </Form.Group>

                <Form.Group controlId="formPlaintextEmail">
                    <Form.Label> Clienta </Form.Label>
                    <Form.Control size="lg" value={cita.clienta} onChange={e => setClienta(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPlaintextEmail">
                    <Form.Label> Agenda </Form.Label>
                    <Form.Control size="lg" value={cita.agenda} onChange={e => setAgenda(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPlaintextPassword">
                    <Form.Label> Servicios </Form.Label>
                    {cita.servicios.map((servicio, key) =>
                        <Row key={key}>
                            <Col md={7}>
                                <Form.Control value={servicio.nombre} placeholder="Nombre" onChange={e => handleChange("nombre", key, e.target.value)} />
                            </Col>
                            <Col>
                                <Form.Control value={servicio.valor} placeholder="Valor" onChange={e => handleChange("valor", key, e.target.value)} />
                            </Col>
                        </Row>
                    )}
                    <button onClick={() => addServicio()} ><VscAdd /></button>
                    {cita.servicios.length > 1 && <button onClick={() => reduceServicio()} ><VscClose /></button>}
                </Form.Group>
                <Button style={{ width: "100%" }} variant="primary"
                    onClick={() => onSave()}> Guardar </Button>
            </Form>
        </>
    )
}

export default CrearCitaForm;