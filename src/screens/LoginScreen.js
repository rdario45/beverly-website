import React, { useState } from 'react';
import SingUp from '../components/SingUp';
import SingIn from '../components/SignIn';

function LoginScreen({ login }) {
  const [online, setOnline] = useState(true);

  return( online ? 
    <SingIn login={login} setOnline={setOnline}/> : 
    <SingUp login={login} setOnline={setOnline}/> )
}

export default LoginScreen;