import React from "react";

class Controlcitas extends React.Component{
    render(){
        return(
            <section class="content-citas" id="mainContent">
                <h1 class="h1-cc">Agendar Cita Médica</h1>

                <div class="form-container">
                    <form id="appointmentForm" class="form-cc">
                        <label for="patient">Paciente:</label>
                        <input type="text" id="patient" name="patient" required />

                        <label for="date">Fecha:</label>
                        <input type="date" id="date" name="date" required />

                        <label for="time">Hora:</label>
                        <select id="timeSelect" name="time" required></select>

                        <label for="doctor">Médico:</label>
                        <input type="text" id="doctor" name="doctor" required />

                        <input type="submit" value="Programar Cita" />
                    </form>
                </div>

                <div class="table-container">
                    <table class="table-cc">
                        <thead>
                            <tr>
                                <th class="th-cc">Paciente</th>
                                <th class="th-cc">Fecha</th>
                                <th class="th-cc">Hora</th>
                                <th class="th-cc">Médico</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>

            </section>
        );
    }
}

export default Controlcitas;