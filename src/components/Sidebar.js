import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} style={{
        padding: "15px"
      }}> Beverly  </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Beverly </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li> <a href="/"> [Agendas] </a> </li>
            <li> <a href="/clients"> [Clientes] </a> </li>
            <li> <a href="/servicios"> [Servicios] </a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;