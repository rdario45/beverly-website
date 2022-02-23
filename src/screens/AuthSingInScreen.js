import React from 'react';
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import api from "../redux/effects/index";

function SingIn({ login, setOnline }) {
  const handleSubmit = (event) => {
    // event.preventDefault();
    api.signin("phone",).then(response => {
      login(response.data); // access_token
    });
  }

  return (
    <div style={{
      width: "400px",
      // height: "100px",
      backgroundColor: "red",
      margin: "auto",
    }}>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="phone"
            aria-label="phone"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
    </div>
  );
}

export default SingIn;
