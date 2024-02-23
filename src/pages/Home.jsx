import React from "react";

class Home extends React.Component {
    render() {
        return (
            <section class="body-index">
                <header class="header-index">
                    <section class="header-container">
                        <img class="img-titulo" src="images/ClinicaRenacer.png" alt="Titulo" />
                    </section>
                    <img class="img-logo" src="images/clinic-logo.png" alt="Logo" />
                </header>
                <section class="section-center-index">
                    <img src="images/clinic-logo.png" alt="Logo" />
                    <p class="p-slogan">"Cuidando tu Salud, Administrando tu Bienestar"</p>
                    <section class="login-container">
                        <form id="loginForm">
                            <label for="nombre">Nombre</label><br />
                            <input type="text" id="nombre" name="nombre" placeholder="Usuario" required /><br />
                            <label for="clave">Clave</label><br />
                            <input type="password" id="clave" name="clave" placeholder="Clave" required /><br />
                            <br />
                            <button class="submit-input" type="button">Acceder</button>
                        </form>
                    </section>
                </section>
                <footer class="footer-index">
                    <section class="section-footer">
                        <a href="https://web.whatsapp.com/"><img class="img-wp" src="images/whatsapp-logo.png" alt="Logo WhatsApp" /></a>
                        <p class="text-footer">© 2023 CLINICADMIN</p>
                        <a href="https://instagram.com"><img class="img-ig" src="images/insta-logo.png" alt="Logo Instagram" /></a>
                    </section>
                </footer>

                <script src="index.js"></script>
            </section>
        );
    }
}

export default Home;
