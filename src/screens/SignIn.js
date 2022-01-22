import React from 'react';
import { Form, Button } from "react-bootstrap";
import api from "../api/index";

function SingIn({ login, setOnline }) {
  const handleSubmit = (event) => {
    // event.preventDefault();
    api.signin("phone", "code").then(response => {
      console.log("response", response);
        login(response.data); // access_token
    });
  }

  return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    //     <form onSubmit={handleSubmit}>
    //         <label>
    //             <p>phone</p>
    //             <input type="text" onChange={e => setPhone(e.target.value)}/>
    //         </label>
    //         { sent &&  <label>
    //             <p>code</p>
    //             <input type="text" onChange={e => setCode(e.target.value)}/>
    //         </label>}

    //         <div>
    //             { !sent ? <button onClick={()=>sendCode()} >Send</button> : <button type="submit">Sing In</button> }
    //         </div>
    //     </form>
    //     <a href="#" style={{textDecoration: "underline"}}onClick={()=>setOnline(false)}>Sing Up</a>
    // </div>
  );
}

export default SingIn;
