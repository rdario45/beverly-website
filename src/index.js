import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; //! important
import './index.css';
import BeverlyApp from './BeverlyApp';

ReactDOM.render(
  <React.StrictMode>
    <BeverlyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

