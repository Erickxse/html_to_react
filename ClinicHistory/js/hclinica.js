// hclinica.js

document.addEventListener('DOMContentLoaded', function () {

    function guardarHistoriaClinica() {
      // Obtener los valores del formulario
      var formData = {
        ci: parseInt(document.getElementById('ci').value),
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        telefono: document.getElementById('telefono').value,
        correo: document.getElementById('correo').value,
        sexo: document.getElementById('sexo').value,
        seguro: document.getElementById('seguro').value,
        sintomas: document.getElementById('sintomas').value,
        diagnostico: document.getElementById('diagnostico').value,
        medicamentos: document.getElementById('medicamentos').value,
        examenes: document.getElementById('examenes').value,
        tratamiento: document.getElementById('tratamiento').value
      };
  
      // Validar tipo de dato y rango de la fecha de nacimiento
      if (
        isNaN(formData.ci) ||
        formData.ci <= 0 ||
        formData.nombre.trim() === '' ||
        formData.apellido.trim() === '' ||
        !isValidDate(formData.fechaNacimiento) ||
        !isValidPhoneNumber(formData.telefono) ||
        !isValidEmail(formData.correo) ||
        !isValidCI(formData.ci)
      ) {
        alert('Por favor, complete todos los campos correctamente.');
        return;
      }
  
      var birthYear = new Date(formData.fechaNacimiento).getFullYear();
      if (birthYear < 1921 || birthYear > 2024) {
        alert('Ingrese una fecha de nacimiento válida (1921-2024).');
        return;
      }
  
      // Resto del código para guardar en el almacenamiento local y actualizar la lista
      var storedData = JSON.parse(localStorage.getItem('historiasClinicas')) || [];
      storedData.push(formData);
      localStorage.setItem('historiasClinicas', JSON.stringify(storedData));

      alert('Datos guardados correctamente.');

        // Limpiar campos del formulario
        document.getElementById('ci').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('fechaNacimiento').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('sexo').value = 'masculino';
        document.getElementById('seguro').value = 'si';
        document.getElementById('sintomas').value = '';
        document.getElementById('diagnostico').value = '';
        document.getElementById('medicamentos').value = '';
        document.getElementById('examenes').value = '';
        document.getElementById('tratamiento').value = '';

      actualizarListaHistoriasClinicas();
    }
  
    function isValidDate(dateString) {
      var regex = /^\d{4}-\d{2}-\d{2}$/;
      return dateString.match(regex) !== null;
    }
  
    function isValidPhoneNumber(phoneNumber) {
      var regex = /^\d{10}$/;
      return phoneNumber.match(regex) !== null;
    }
  
    function isValidEmail(email) {
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return email.match(regex) !== null;
    }
  
    function validarCedula() {
      var ci = document.getElementById('ci').value;
  
      if (isValidCI(ci)) {
        console.log('Cédula válida:', ci);
        return true;
      } else {
        console.log('Cédula no válida:', ci);
        return false;
      }
    }
  
    function isValidCI(ci) {
      var isNumeric = true;
      var total = 0,
        individual;
  
      for (var position = 0; position < 10; position++) {
        individual = ci.toString().substring(position, position + 1);
  
        if (isNaN(individual)) {
          console.log(ci, position, individual, isNaN(individual));
          isNumeric = false;
          break;
        } else {
          if (position < 9) {
            if (position % 2 == 0) {
              if (parseInt(individual) * 2 > 9) {
                total += 1 + ((parseInt(individual) * 2) % 10);
              } else {
                total += parseInt(individual) * 2;
              }
            } else {
              total += parseInt(individual);
            }
          }
        }
      }
  
      if ((total % 10) != 0) {
        total = (total - (total % 10) + 10) - total;
      } else {
        total = 0;
      }
  
      if (isNumeric) {
        if (ci.toString().length !== 10) {
            alert("La cédula debe tener 10 dígitos.");
            return false;
        }
    
        if (parseInt(ci, 10) === 0 || ci[0] === '0') {
            alert("La cédula no puede ser cero o contener ceros a la izquierda.");
            return false;
        }
    
        if (total !== parseInt(individual, 10)) {
            alert("La cédula no es válida.");
            return false;
        }
    
        console.log('Cédula válida', ci);
        return true;
    }
    
  
      alert("El dato solo puede contener números.");
      return false;
    }
  
    function actualizarTablaHistoriasClinicas() {
        var storedData = JSON.parse(localStorage.getItem('historiasClinicas')) || [];
        var cuerpoTabla = document.getElementById('historiasClinicasCuerpo');
      
        // Limpia el cuerpo de la tabla antes de actualizarlo
        cuerpoTabla.innerHTML = '';
      
        // Recorre los datos almacenados y agrega filas a la tabla
        storedData.forEach(function (formData) {
          var fila = cuerpoTabla.insertRow();
      
          // Columna 1: Nombre y Apellido
          var celda1 = fila.insertCell(0);
          celda1.textContent = formData.nombre + ' ' + formData.apellido;
      
          // Columna 2: Cédula
          var celda2 = fila.insertCell(1);
          celda2.textContent = formData.ci;
      
          // Columna 3: Seguro
          var celda3 = fila.insertCell(2);
          celda3.textContent = formData.seguro;
      
          // Columna 4: Celular
          var celda4 = fila.insertCell(3);
          celda4.textContent = formData.telefono;
      
          // Columna 5: Correo
          var celda5 = fila.insertCell(4);
          celda5.textContent = formData.correo;
        });
    }
  
    // Asociar la función validarCedula al evento de pérdida de foco del campo de cédula
    document.getElementById('ci').addEventListener('blur', function () {
      validarCedula();
    });
  
    // Asociar la función guardarHistoriaClinica al evento de clic en el botón de guardar
    document.getElementById('guardarButton').addEventListener('click', function () {
      // Otras validaciones y acciones antes de guardar...
      if (validarCedula()) {
        guardarHistoriaClinica();
      }
    });
  
    // Resto del código para actualizar la lista de historias clínicas...
    actualizarTablaHistoriasClinicas();
  });
  