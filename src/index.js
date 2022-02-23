import React from 'react';
import ReactDOM from 'react-dom';
import BeverlyApp from './BeverlyApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import useBeverlyAuth from "./redux/hooks/useBeverlyAuth";
// const [userData, authCtrl] = useBeverlyAuth();
// React Hook "useBeverlyAuth" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks

// if (!token) {
//   <SignIn {...authCtrl} />
// }

// console.log("user", userData);

ReactDOM.render(
  <React.StrictMode>
    <BeverlyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

