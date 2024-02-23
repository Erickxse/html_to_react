import React from "react";



class Controlcitas extends React.Component {
  render() {
    return (
      <section className="content-citas" id="mainContent">
        
        <h1 className="h1-cc">Agendar Cita Médica</h1>

        <div className="form-container">
          <form id="appointmentForm" className="form-cc">
            <label htmlFor="patient" className="cc-label">Paciente:</label>
            <input type="text" id="patient" name="patient" className="cc-input" required />

            <label htmlFor="date" className="cc-label">Fecha:</label>
            <input type="date" id="date" name="date" className="cc-input" required />

            <label htmlFor="time" className="cc-label">Hora:</label>
            <select id="timeSelect" name="time" className="cc-select" required></select>

            <label htmlFor="doctor" className="cc-label">Médico:</label>
            <input type="text" id="doctor" name="doctor" className="cc-input" required />

            <input type="submit" value="Programar Cita" className="cc-submit" />
          </form>
        </div>

        <div className="table-container">
          <table className="table-cc">
            <thead>
              <tr>
                <th className="th-cc">Paciente</th>
                <th className="th-cc">Fecha</th>
                <th className="th-cc">Hora</th>
                <th className="th-cc">Médico</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Controlcitas;
