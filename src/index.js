import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify  from 'aws-amplify';

Amplify.configure({
  aws_cognito_region: "us-west-1",
  aws_user_pools_id:  "us-west-1_2WoMfqgfe",
  aws_user_pools_web_client_id: "191jjt0uesl3cifk3fafsf9jg3",
  aws_cognito_identity_pool_id: "", // (optional) - Amazon Cognito Identity Pool ID
  aws_mandatory_sign_in: "enable" // (optional) - Users are not allowed to get the aws credentials unless they are signed in
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

