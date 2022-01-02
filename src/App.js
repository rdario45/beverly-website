import React, { useState, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import { IoReload } from "react-icons/io5";
import { globalReducer } from './store'
import Header from "./components/Header"
import AgendasScreen from './screens/AgendasScreen'
import ClientesScreen from './screens/ClientesScreen'
import ServiciosScreen from './screens/ServiciosScreen'
import CrearCitaForm from "./components/CrearCitaForm";
import API from "./api"

const initialState = {
  agendas: [],
  form: {
    clienta: "",
    agenda: "",
    servicios: [{}]
  }
}

function App() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [state, dispatch] = useReducer(globalReducer,
    initialState);
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

  return (
    <Container fluid>

      <Row style={{
      }}>

        <Col md={8} style={{
        }}>

          <Stack direction="vertical" >
            
            <Header
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
            />

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<AgendasScreen
                  selectedDate={selectedDate}
                  handleDateChange={handleDateChange}
                  agendas={state.agendas}
                  onDelete={onDelete}
                  dispatch={dispatch}
                  onUpdate={onUpdate}
                />} ></Route>
                <Route path="/clientes" element={<ClientesScreen />} ></Route>
                <Route path="/servicios" element={<ServiciosScreen />} ></Route>
              </Routes>
            </BrowserRouter>
          </Stack>

        </Col>

        <Col md={4} style={{
          // backgroundColor: "olive"
        }}>

          <Stack direction="vertical" gap={5}>
            <CrearCitaForm
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
              dispatch={dispatch}
              cita={state.form}
            />

            <Button size="lg"><IoReload /></Button>

          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;