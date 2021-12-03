import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientsScreen from './screens/ClientsScreen'
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'
import useLoginHook from './hooks/login';
import './App.css';

function App() {
  const [token, setToken] = useLoginHook();

  if(!token) {
     return <LoginScreen setToken={setToken}/>
  }
  
  return (
    <div className="App">
      <div className="App-header">Application</div>
      <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element={<DashboardScreen />} ></Route>
            <Route path="/" element={<ClientsScreen />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
