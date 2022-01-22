import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Stack, Modal } from "react-bootstrap";
import BeverlyHeader from "./components/BeverlyHeader";
import AgendasScreen from './screens/AgendasScreen';
import CrearCitaForm from "./components/CrearCitaForm";
import useApp from "./hooks/useApp";
import SignIn from './screens/SignIn';
import useAuth from './hooks/useAuth';
import useWindowDimensions from './hooks/useWindowDimensions';

const initialState = {
  show: false,
  fecha: new Date(),
  activeDay: 0,
  headerRef: React.createRef(null),
  form: {
    cliente: "",
    agenda: "",
    servicios: [{}]
  },
  week: {
    lunes: [],
    martes: [],
    miercoles: [],
    jueves: [],
    viernes: [],
    sabado: [],
  }
}

function App() {
  const [
    state,
    handleShow,
    handleClose,
    onSave,
    handleFecha,
    onDelete,
    onUpdate,
    loadAgendas,
    setCliente,
    setAgenda,
    handleChange,
    addService,
    subService,
    onSelect,
  ] = useApp(initialState);

  const [token, login] = useAuth({ token: null });
  const dimensions = useWindowDimensions();
  const header = state.headerRef.current;
  if (!token) {
    return <SignIn login={login} />
  }

  return (
    <Stack direction="vertical">
      <BeverlyHeader
        headerRef={state.headerRef}
        selectedDate={state.fecha}
        handleDateChange={handleFecha}
        handleShow={handleShow}
      />

      <div style={{
        height: dimensions.height - (header != null ? header.clientHeight : 0)
      }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<AgendasScreen
                fecha={state.fecha}
                week={state.week}
                onDelete={onDelete}
                onUpdate={onUpdate}
                loadAgendas={loadAgendas}
                onSelect={onSelect}
                activeDay={state.activeDay}
              />}></Route>
          </Routes>
        </BrowserRouter>
      </div>

      <Modal show={state.show} onHide={handleClose}>
        <Modal.Body>
          <CrearCitaForm
            fecha={state.fecha}
            cita={state.form}
            handleFecha={handleFecha}
            setAgenda={setAgenda}
            setCliente={setCliente}
            handleChange={handleChange}
            addService={addService}
            subService={subService}
            onSave={onSave}
          />
        </Modal.Body>
      </Modal>
    </Stack>
  );
}

export default App;