import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav id="navbar">
        <ul id="menuText">MENU</ul>
        <ul id="navOptions" className="nav-options">
          <li
            data-page="Informacion.jsx"
            title="Informacion"
            className={this.props.isActive === "Informacion" ? "active" : ""}
          >
            <i className="fa-solid fa-sheet-plastic"></i>
            <a href="#">Servicios</a>
          </li>
          <li
            data-page="Historiaclinica.jsx"
            title="Historia Clínica"
            className={this.props.isActive === "Historiaclinica" ? "active" : ""}
          >
            <i className="fa-solid fa-hospital-user"></i>
            <a href="#">Historia Clinica</a>
          </li>
          <li
            data-page="Controlcitas.jsx"
            title="Control de Citas"
            className={this.props.isActive === "Controlcitas" ? "active" : ""}
          >
            <i className="fa-solid fa-laptop-medical"></i>
            <a href="#">Agendar Citas</a>
          </li>
          <li
            data-page="Calendario.jsx"
            title="Calendario"
            className={this.props.isActive === "Calendario" ? "active" : ""}
          >
            <i className="fa-regular fa-calendar-days"></i>
            <a href="#">Calendario</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;