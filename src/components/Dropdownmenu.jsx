import React from "react";

class Dropdownmenu extends React.Component{
    render(){
        return(
            <section class="dropdown-menu" id="dropdownMenu">
                <ul>
                    <li>
                    <a href="../index.html" onclick="cerrarSesion()">
                        <i class="fas fa-sign-out-alt"></i>Cerrar Sesión
                    </a>
                </li>
                </ul>
            </section>
        )
    }
}

export default Dropdownmenu;