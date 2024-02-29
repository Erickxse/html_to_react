import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usuarioCorrecto = "admin";
  const claveCorrecta = "123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === usuarioCorrecto && password === claveCorrecta) {
      // Redirect to the desired page
      window.location.href = "/Informacion";
    } else {
      alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  };

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label><br />
      <input
        type="text"
        id="nombre"
        name="nombre"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      /><br />
      <label htmlFor="clave">Clave</label><br />
      <input
        type="password"
        id="clave"
        name="clave"
        placeholder="Clave"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br />
      <br />
      <button class="submit-input" type="submit">Acceder</button>
    </form>
  );
}

export default LoginForm;