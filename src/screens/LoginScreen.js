import React, { useEffect, useState } from 'react';
import api from '../api'

function LoginScreen({ setToken }) {
  const [telephone, setTelephone] = useState(null)
  const [code, setCode] = useState(null)

  const handleSubmit=(event) => {
    event.preventDefault();
    api.signin(telephone, code).then(response => {
      setToken(response.data);
    });
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        <p>telephone</p>
        <input type="text" onChange={e => setTelephone(e.target.value)}/>
      </label>
      <label>
        <p>code</p>
        <input type="text" onChange={e => setCode(e.target.value)}/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default LoginScreen;