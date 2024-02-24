import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  handleClick = (page) => {
    this.props.onPageChange(page);
  };

  render() {
    const { isActive } = this.props;
    return (
      <nav id="navbar">
        <ul id="menuText">MENU</ul>
        <ul id="navOptions" className="nav-options">
          <li
            data-page="Informacion.jsx"
            title="Informacion"
            className={isActive === "Informacion" ? "active" : ""}
          >
            <i className="fa-solid fa-sheet-plastic"></i>
            <Link to="/Informacion" onClick={() => this.handleClick("Informacion")}>
              Servicios
            </Link>
          </li>
          <li
            data-page="Historiaclinica.jsx"
            title="Historia Clínica"
            className={isActive === "Historiaclinica" ? "active" : ""}
          >
            <i className="fa-solid fa-hospital-user"></i>
            <Link
              to="/Historiaclinica"
              onClick={() => this.handleClick("Historiaclinica")}
            >
              Historia Clinica
            </Link>
          </li>
          <li
            data-page="Controlcitas.jsx"
            title="Control de Citas"
            className={isActive === "Controlcitas" ? "active" : ""}
          >
            <i className="fa-solid fa-laptop-medical"></i>
            <Link
              to="/Controlcitas"
              onClick={() => this.handleClick("Controlcitas")}
            >
              Agendar Citas
            </Link>
          </li>
          <li
            data-page="Calendario.jsx"
            title="Calendario"
            className={isActive === "Calendario" ? "active" : ""}
          >
            <i className="fa-regular fa-calendar-days"></i>
            <Link
              to="/Calendario"
              onClick={() => this.handleClick("Calendario")}
            >
              Calendario
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;