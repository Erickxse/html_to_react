// validarCredenciales.js

function validarCredenciales() {
    // Datos quemados para usuario y contraseña
    const usuarioCorrecto = "admin";
    const claveCorrecta = "123";

    // Obtener los valores ingresados por el usuario
    const usuarioIngresado = document.getElementById("nombre").value;
    const claveIngresada = document.getElementById("clave").value;

    // Construir la ruta completa al archivo start.php
    const rutaStartPHP = "pages/informacion.html";

    // Validar los datos
    if (usuarioIngresado === usuarioCorrecto && claveIngresada === claveCorrecta) {
        // Datos correctos, puedes redirigir a la página correspondiente
        window.location.href = rutaStartPHP;
    } else {
        // Datos incorrectos, muestra un mensaje de error o realiza otras acciones
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}

