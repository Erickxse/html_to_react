//citas.js


document.addEventListener('DOMContentLoaded', function () {
    // Event listener para el formulario de citas médicas
    document.getElementById('appointmentForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores de la cita médica
        var patient = document.getElementById('patient').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('timeSelect').value; // Ahora obtenemos el valor del selector de hora
        var doctor = document.getElementById('doctor').value;

        // Crear una nueva fila en la tabla
        var table = document.querySelector('table tbody');
        var newRow = table.insertRow(table.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        cell1.innerHTML = patient;
        cell2.innerHTML = date;
        cell3.innerHTML = time;
        cell4.innerHTML = doctor;

        // Almacenar los datos en localStorage
        var storedAppointments = JSON.parse(localStorage.getItem('citasMedicas')) || [];
        storedAppointments.push({
            patient: patient,
            date: date,
            time: time,
            doctor: doctor
        });
        localStorage.setItem('citasMedicas', JSON.stringify(storedAppointments));

        // Limpiar los campos del formulario
        document.getElementById('patient').value = '';
        document.getElementById('date').value = '';
        document.getElementById('timeSelect').value = '';
        document.getElementById('doctor').value = '';
    });

    // Función para cargar las citas almacenadas en localStorage al cargar la página
    function loadAppointments() {
        var storedAppointments = JSON.parse(localStorage.getItem('citasMedicas')) || [];
        var table = document.querySelector('table tbody');

        storedAppointments.forEach(function (appointment) {
            var newRow = table.insertRow(table.rows.length);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            cell1.innerHTML = appointment.patient;
            cell2.innerHTML = appointment.date;
            cell3.innerHTML = appointment.time;
            cell4.innerHTML = appointment.doctor;
        });
    }

    // Cargar citas al cargar la página
    loadAppointments();

    // Cargar selector de hora
    var timeSelect = document.getElementById('timeSelect');
    var startTime = 7 * 60; // 7 am en minutos
    var endTime = 18 * 60; // 6 pm en minutos
    var interval = 30; // Intervalo de 30 minutos

    for (var minutes = startTime; minutes < endTime; minutes += interval) {
        var hour = Math.floor(minutes / 60);
        var minute = minutes % 60;
        var ampm = hour >= 12 ? 'PM' : 'AM';
        hour = hour % 12 || 12; // Convertir a formato de 12 horas

        var timeString = `${hour}:${minute === 0 ? '00' : minute} ${ampm}`;
        var option = document.createElement('option');
        option.value = timeString;
        option.text = timeString;
        timeSelect.add(option);
    }
});
