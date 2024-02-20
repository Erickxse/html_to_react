import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <nav id="navbar">
                <ul id="menuText">MENU</ul>
                <ul id="navOptions" className="nav-options">
                    <li data-page="informacion.html" title="Servicios" className="active">
                        <i className="fa-solid fa-sheet-plastic"></i><a href="#">Servicios</a>
                    </li>
                    <li data-page="HistoriaClinica.html" title="Historia Clínica">
                        <i className="fa-solid fa-hospital-user"></i><a href="#">Historia Clinica</a>
                    </li>
                    <li data-page="ControlCitas.html" title="Control de Citas">
                        <i className="fa-solid fa-laptop-medical"></i><a href="#">Agendar Citas</a>
                    </li>
                    <li data-page="start.html" title="Calendario">
                        <i className="fa-regular fa-calendar-days"></i><a href="#">Calendario</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
