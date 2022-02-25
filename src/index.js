import React from 'react';
import ReactDOM from 'react-dom';
import BeverlyApp from './BeverlyApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import useBeverlyAuth from "./redux/hooks/useBeverlyAuth";
// const [userData, authCtrl] = useBeverlyAuth();
// if (!token) {
//   <SignIn {...authCtrl} />
// }

ReactDOM.render(
  <React.StrictMode>
    <BeverlyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

