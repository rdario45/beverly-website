import React, { useReducer, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Stack, Modal } from "react-bootstrap";
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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSave = (cita) => {
    const nuevaCita = Object.assign(cita, {
      hora: state.fecha.getTime().toString()
    })

    if (cita.id) {
      API.actualizarCita(nuevaCita, cita.id).then(body =>
        dispatch({
          type: "form",
          payload: Object.assign({
            clienta: "",
            agenda: "",
            servicios: [{ nombre: "", valor: "" }]
          })
        })
      );
    } else {
      API.guardarCita(nuevaCita).then(body =>
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
  }

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

  const setClienta = (clienta, cita) => {
    dispatch({
      type: "form",
      payload: Object.assign(cita, { clienta })
    })
  }

  const setAgenda = (agenda, cita) => {
    dispatch({
      type: "form",
      payload: Object.assign(cita, { agenda })
    })
  }

  const handleChange = (attrib, key, value, cita) => {
    cita.servicios[key][attrib] = value;
    dispatch({
      type: "form",
      payload: Object.assign(cita, { servicios: cita.servicios })
    })
  }

  const moreServicios = (cita) => {
    dispatch({
      type: "form",
      payload: Object.assign(cita, { servicios: cita.servicios.concat({ nombre: "" }) })
    })
  }

  const lessServicios = (cita) => {
    cita.servicios.pop()
    dispatch({
      type: "form",
      payload: Object.assign(cita, { servicios: cita.servicios })
    })
  }

  const onSlide = (a) => {
    console.log("onSlide", a);
  }

  const onSlidA = (b) => {
    console.log("onSlid", b);
  }

  return (
    <Stack direction="vertical">
      <BeverlyHeader
        selectedDate={state.fecha}
        handleDateChange={updateFecha}
        handleShow={handleShow}
      />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<AgendasScreen
              fecha={state.fecha}
              agendas={state.agendas}
              onDelete={onDelete}
              onUpdate={onUpdate}
              loadAgendas={loadAgendas}
              onSlide={onSlide}
              onSlid={onSlidA}
            />}></Route>
          <Route path="/clientes" element={<ClientesScreen />}></Route>
          <Route path="/servicios" element={<ServiciosScreen />}></Route>
        </Routes>
      </BrowserRouter>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <CrearCitaForm
            fecha={state.fecha}
            cita={state.form}
            updateFecha={updateFecha}
            setAgenda={setAgenda}
            setClienta={setClienta}
            handleChange={handleChange}
            lessServicios={lessServicios}
            moreServicios={moreServicios}
            onSave={onSave}
          />
        </Modal.Body>
      </Modal>
    </Stack>
  );
}

export default App;