import React from "react";

const Sidebar = props => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      // margin: "10px",
      padding: "10px",
      // backgroundColor: "yellow",
    }}>

      <div> Beverly </div>
      <ul>
        <li>
          <a href="/"> [Agenda] </a>
        </li>
        <li>
          <a href="/clients"> [Clientes] </a>
        </li>
        <li>
          <a href="/servicios"> [Servicios] </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;