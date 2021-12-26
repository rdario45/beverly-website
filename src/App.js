import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LoginScreen from './screens/LoginScreen'
import ClientsScreen from './screens/ClientsScreen'
import AgendaScreen from './screens/AgendaScreen'
import BalanceScreen from './screens/BalanceScreen'
import ServiciosScreen from './screens/ServiciosScreen'
// import Session from './components/Session'
// import useAuth from './hooks/auth';
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar"

function App() {
  // const [logout, login, token] = useAuth();
  // if(!token) {
  //    return <LoginScreen login={login}/>
  // }
  return (
    <Container>
      <Row>
        <Col>
          <Sidebar />
        </Col>

        <Col>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AgendaScreen />} ></Route>
              <Route path="/clientes" element={<ClientsScreen />} ></Route>
              <Route path="/servicios" element={<ServiciosScreen />} ></Route>
            </Routes>
          </BrowserRouter>
        </Col>

        <Col>
          <div style={{ backgroundColor: "olive" }}> BLOCK </div>
        </Col>

      </Row>
    </Container>
  );
}

export default App;