import React from "react";

class Header extends React.Component{
    render(){
        return(
            <header class="header-index">
                <section class="header-container">
                    <img class="img-titulo" src="images/ClinicaRenacer.png" alt="Titulo" />
                </section>
                <img class="img-logo" src="images/clinic-logo.png" alt="Logo" />
            </header>
        )
    }
}

export default Header;