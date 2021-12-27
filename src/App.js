import React, { useState, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import ClientsScreen from './screens/ClientsScreen'
import AgendaScreen from './screens/AgendaScreen'
import ServiciosScreen from './screens/ServiciosScreen'
import { globalReducer } from './store'
import Sidebar from "./components/Sidebar"
import CrearCitaForm from "./components/CrearCitaForm";
import API from "./api"

const initialState = {  
  agendas: [], 
  form: {
    clienta: null,
    agenda: null,
    servicios: []
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
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>

        <Col md={7}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AgendaScreen
                selectedDate={selectedDate}
                handleDateChange={handleDateChange}
                agendas={state.agendas}
                onDelete={onDelete}
                dispatch={dispatch}
                onUpdate={onUpdate}
              />} ></Route>
              <Route path="/clientes" element={<ClientsScreen />} ></Route>
              <Route path="/servicios" element={<ServiciosScreen />} ></Route>
            </Routes>
          </BrowserRouter>
        </Col>

        <Col md={3}>
          <div style={{
            // backgroundColor: "olive" 
          }}>
            <CrearCitaForm
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
              dispatch={dispatch}
              cita={state.form}
            />
          </div>
        </Col>

      </Row>
    </Container>
  );
}

export default App;