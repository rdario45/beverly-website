import React, { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, Col, Stack } from "react-bootstrap";
import { globalReducer } from './store'
import BeverlyHeader from "./components/BeverlyHeader"
import AgendasScreen from './screens/AgendasScreen'
import ClientesScreen from './screens/ClientesScreen'
import ServiciosScreen from './screens/ServiciosScreen'
import CrearCitaForm from "./components/CrearCitaForm";
import API from "./api"

const initialState = {
  agendas: [],
  fecha: new Date(),
  form: {
    clienta: "",
    agenda: "",
    servicios: [{}]
  }
}

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const updateFecha = (fecha) => {
    dispatch({
      type: "fecha",
      payload: fecha
    });
  }

  const onDelete = (agendaId, citaId) => {
    API.eliminarCita(citaId).then((body) => {
      dispatch({
        type: "agendas",
        payload: Object.assign([], state.agendas).map(agenda => {
          if (agenda.id === agendaId) {
            agenda.citas = agenda.citas.filter(cita => cita.id !== citaId);
          }
          return agenda;
        })
      });
    });
  }
  const onUpdate = (cita) => {
    dispatch({
      type: "form",
      payload: cita
    });
  }

  const loadAgendas = (fecha) => {
    API.agendas(fecha).then((body) => {
      dispatch({
          type: "agendas",
          payload: body.data
      });
    });
  }

  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <Stack direction="vertical" >
            <BeverlyHeader
              selectedDate={state.fecha}
              handleDateChange={updateFecha}
            />
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <AgendasScreen
                      fecha={state.fecha}
                      agendas={state.agendas}
                      onDelete={onDelete}
                      dispatch={dispatch}
                      onUpdate={onUpdate}
                      loadAgendas={loadAgendas}
                    />} ></Route>
                <Route path="/clientes" element={<ClientesScreen />} ></Route>
                <Route path="/servicios" element={<ServiciosScreen />} ></Route>
              </Routes>
            </BrowserRouter>
          </Stack>
        </Col>
        <Col md={4}>
            <CrearCitaForm
              selectedDate={state.fecha}
              updateFecha={updateFecha}
              dispatch={dispatch}
              cita={state.form}
            />
        </Col>
      </Row>
    </Container>
  );
}

export default App;