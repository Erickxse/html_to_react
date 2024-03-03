import React from "react";
import Dropdownmenu from "./Dropdownmenu";

class Headertemp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            isDropdownOpen: false
        };
    }

    handleMouseOver = () => {
        document.querySelector('.img-logo').src = '../images/engranaje-logo.png';
    }

    handleMouseOut = () => {
        document.querySelector('.img-logo').src = '../images/clinic-logo.png';
    }

    handleDropdownToggle = () => {
        this.setState(prevState => ({
            isDropdownOpen: !prevState.isDropdownOpen
        }));
    }

    render() {
        return (
            <header className="header">
                <section className="header-container">
                    <a href="start.html" className="img-titulo-link">
                        <img className="img-titulo estetoscopio-logo" src="../images/ClinicaRenacer.png" alt="Titulo" />
                    </a>
                    <img className="burger-icon" src="../images/burguer-icon.png" alt="MenuBurger" />
                </section>
                <section className="logo-container">
                    <img
                        className="img-logo"
                        src="../images/clinic-logo.png"
                        alt="Logo"
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut}
                        onClick={this.handleDropdownToggle}
                    />
                    {this.state.isDropdownOpen && <Dropdownmenu />}
                    <img
                        className="engranaje-logo"
                        src="../images/engranaje-logo.png"
                        alt="Engranaje"
                        id="engranaje-icon"
                        onClick={this.handleDropdownToggle}
                    />
                </section>
            </header>
        );
    }
}

export default Headertemp;
