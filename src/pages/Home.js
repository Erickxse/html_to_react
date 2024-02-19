import React from "react";

class Home extends React.Component {
    render() {
        return (
            <body class="body-index">
                <section class="section-center">
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

                <script src="index.js"></script>
            </body>
        );
    }
}

export default Home;
