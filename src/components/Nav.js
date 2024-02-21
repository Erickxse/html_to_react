import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav id="navbar">
        <ul id="menuText">MENU</ul>
        <ul id="navOptions" className="nav-options">
          <li
            data-page="Informacion.js"
            title="Informacion"
            className={this.props.isActive === "Informacion" ? "active" : ""}
          >
            <i className="fa-solid fa-sheet-plastic"></i>
            <a href="#">Servicios</a>
          </li>
          <li
            data-page="HistoriaClinica.html"
            title="Historia Clínica"
            className={this.props.isActive === "HistoriaClinica" ? "active" : ""}
          >
            <i className="fa-solid fa-hospital-user"></i>
            <a href="#">Historia Clinica</a>
          </li>
          <li
            data-page="ControlCitas.html"
            title="Control de Citas"
            className={this.props.isActive === "ControlCitas" ? "active" : ""}
          >
            <i className="fa-solid fa-laptop-medical"></i>
            <a href="#">Agendar Citas</a>
          </li>
          <li
            data-page="start.html"
            title="Calendario"
            className={this.props.isActive === "start" ? "active" : ""}
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