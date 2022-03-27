import React from 'react';
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

function BeverlySingInScreen({ phone, code, setCode, login }) {
  return (
    <div style={{
      width: "300px",
      margin: "auto",
      textAlign: "center",
      paddingTop: "200px",
    }}>
      <span style={{
        fontSize: "50px"
      }}> BeverlySpa </span>
      <p style={{
        fontFamily: "Ramaraja, serif",
        fontSize: "23px",
        color: "black"
      }}> Ingrese el codigo que le llegara a su celular: {phone} </p>
      <Form>
        <InputGroup className="mb-3">
          <FormControl
            className="text-center"
            style={{ width: "00%" }}
            placeholder="6 digits code here"
            aria-label="code"
            aria-describedby="basic-addon1"
            value={code}
            onChange={e => setCode(e.target.value)} />
        </InputGroup>
      </Form>

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => login(phone, code)}> <span style={{
          fontWeight: "bolder"
        }}> SING IN </span> </Button>
      </div>
    </div>
  );
}

export default BeverlySingInScreen;
