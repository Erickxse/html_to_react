import React from "react";

class HeaderTemp extends React.Component{
    render(){
        return(
            <header class="header">
                <section class="header-container">
                    <a href="start.html" class="img-titulo-link">
                        <img class="img-titulo estetoscopio-logo" src="../images/ClinicaRenacer.png" alt="Titulo" />
                    </a>
                    <img class="burger-icon" src="../images/burguer-icon.png" alt="MenuBurger" />
                </section>
                <section class="logo-container">
                    <img class="img-logo" src="../images/clinic-logo.png" alt="Logo" />
                    <img class="engranaje-logo" src="../images/engranaje-logo.png" alt="Engranaje" id="engranaje-icon" />
                    </section>
                <section class="dropdown-menu" id="dropdownMenu">
                    <ul>
                        <li>
                        <a href="../index.html" onclick="cerrarSesion()">
                            <i class="fas fa-sign-out-alt"></i>Cerrar Sesión
                        </a>
                    </li>
                    </ul>
                </section>
            </header>
        )
    }
}

export default HeaderTemp;