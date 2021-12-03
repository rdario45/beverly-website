import React, { useState, useEffect, useReducer } from 'react';
import api from '../api';

const initialState = {telephone: '', code: ''}

function useLoginHook() {
  const [state, setIsOnline] = useState(initialState);
  const [cel, setCel] = useState(null);
  const [code, setCode] = useState(null);

  function signin(cel, code) {
    setIsOnline(true);
    setCel(cel);
    setCode(code);
  }

  useEffect(() => {
    api.signin(cel, code).then( r => {
        console.log(r);
    });
    return () => {
        localStorage.clear();
    };
  });

  return [state, signin];
}

export default useLoginHook