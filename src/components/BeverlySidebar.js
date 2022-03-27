import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";

const BeverlySidebar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} style={{
        paddingLeft: "15px",
        fontSize: "48px",
      }}> BeverlySpa </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> BeverlySpa </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li> <a href="/"> [Agendas] </a> </li>
            <li> <a href="/balance"> [Balance] </a> </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default BeverlySidebar;