import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientsScreen from './screens/ClientsScreen'
import LoginScreen from './screens/LoginScreen'
import './App.css';


function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <LoginScreen setToken={setToken} />
  }
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/dashboard" element={<ClientsScreen />} ></Route>
          <Route path="/preferences" element={<ClientsScreen />} ></Route>
          <Route path="/" element={<App />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
