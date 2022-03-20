import React, { useState} from 'react';
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

function BeverlySingInScreen({ phone, setPhone, sendCode }) {
  return (
    <div style={{
      width: "300px",
      margin: "auto",
      textAlign: "center",
      paddingTop: "200px",
      fontSize: "50px"
    }}>
      BeverlySpa
      <Form>
        <InputGroup className="mb-3">
          <FormControl
            className="text-center" 
            style={{ width: "00%" }}
            placeholder="phone"
            aria-label="phone"
            aria-describedby="basic-addon1"
            value={phone}
            onChange={e => setPhone(e.target.value)} />
        </InputGroup>
      </Form>

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={() => sendCode(phone)}> <span style={{
          fontWeight: "bolder"
        }}> SEND CODE </span> </Button>
      </div>
    </div>
  );
}

export default BeverlySingInScreen;
