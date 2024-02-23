import React from "react";

class Historiaclinica extends React.Component {
    render() {
        return (
            <section className="content-hclinica" id="mainContent">
                <section className="patient-form">
                    <h2>Registro de Historia Clínica</h2>
                    <form id="historiaClinicaForm">
                        <label htmlFor="ci">Cédula de Identidad:</label>
                        <input type="number" id="ci" name="ci" required />

                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required />

                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" required />

                        <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                        <input type="date" id="fechaNacimiento" name="fechaNacimiento" required />

                        <label htmlFor="telefono">Número de celular:</label>
                        <input type="tel" id="telefono" name="telefono" pattern="[0-9]{10}" placeholder="Ingrese el número de celular" />

                        <label htmlFor="correo">Correo electrónico:</label>
                        <input type="email" id="correo" name="correo" placeholder="Ingrese el correo electrónico" />

                        <label htmlFor="sexo">Sexo:</label>
                        <select id="sexo" name="sexo" required>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>

                        <label htmlFor="seguro">¿Tiene seguro médico?</label>
                        <select id="seguro" name="seguro" required>
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                        </select>

                        <label htmlFor="sintomas">Síntomas:</label>
                        <textarea id="sintomas" name="sintomas" rows="4" required></textarea>

                        <label htmlFor="diagnostico">Diagnóstico:</label>
                        <input type="text" id="diagnostico" name="diagnostico" />

                        <label htmlFor="medicamentos">Medicamentos Recetados:</label>
                        <textarea id="medicamentos" name="medicamentos" rows="4"></textarea>

                        <label htmlFor="examenes">Resultados de Exámenes:</label>
                        <textarea id="examenes" name="examenes" rows="4"></textarea>

                        <label htmlFor="tratamiento">Tratamiento Recomendado:</label>
                        <textarea id="tratamiento" name="tratamiento" rows="4"></textarea>

                        <button type="button" id="guardarButton">
                            Guardar Historia Clínica
                        </button>
                    </form>
                </section>
                <section className="pacientes-list">
                    <table id="historiasClinicasTabla">
                        <thead>
                            <tr>
                                <th>Nombre y Apellido</th>
                                <th>Cédula</th>
                                <th>Seguro</th>
                                <th>Celular</th>
                                <th>Correo</th>
                            </tr>
                        </thead>
                        <tbody id="historiasClinicasCuerpo"></tbody>
                    </table>
                </section>
            </section>
        );
    }
}

export default Historiaclinica;
