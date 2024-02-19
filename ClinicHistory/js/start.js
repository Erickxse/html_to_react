//start.js
document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var contentSection = document.querySelector('.content');
  var burgerIcon = document.querySelector('.burger-icon');
  var imgTitulo = document.querySelector('.img-titulo');
  var imgLogo = document.querySelector('.img-logo');
  var dropdownMenu = document.getElementById('dropdownMenu');
  const navOptions = document.querySelectorAll('#navOptions li');

  burgerIcon.addEventListener('click', function () {
    navbar.classList.toggle('shrink-navbar');
    contentSection.classList.toggle('expand-content');
    document.body.classList.toggle('shrink-body');

    imgTitulo.classList.add('shrink');

    navOptions.forEach(option => {
      option.classList.toggle('hide-text');
    });

    var menuText = document.getElementById('menuText');
    menuText.classList.toggle('hide-text');
    setTimeout(function () {
      if (imgTitulo.src.includes('ClinicaRenacer.png')) {
        imgTitulo.src = '../images/estetoscopio-logo.png';
        imgTitulo.alt = 'Estetoscopio';
        imgTitulo.style.height = '30px';
        imgTitulo.style.width = '30px';
      } else {
        imgTitulo.src = '../images/ClinicaRenacer.png';
        imgTitulo.alt = 'Titulo';
        imgTitulo.style.height = '40px';
        imgTitulo.style.width = '300px';
      }

      imgTitulo.classList.remove('shrink');
    }, 300);
  });

  var isDropdownVisible = false;

  function cerrarSesion() {
    // Muestra la alerta
    alert("Sesión Finalizada");

    // Redirige a la siguiente página después de que se cierra la alerta
    window.location.href = "../index.html";
  }

  imgLogo.addEventListener('click', function () {
    if (isDropdownVisible) {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'block';
    }

    isDropdownVisible = !isDropdownVisible;
  });

  imgLogo.addEventListener('mouseover', function () {
    imgLogo.classList.add('flip');
    imgLogo.src = '../images/engranaje-logo.png';
  });

  imgLogo.addEventListener('mouseout', function () {
    imgLogo.classList.remove('flip');
    imgLogo.src = '../images/clinic-logo.png';
  });

  navOptions.forEach(option => {
    option.addEventListener('mouseover', function (event) {
      var title = this.getAttribute('title');
      if (title) {
        var tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.textContent = title;
        document.body.appendChild(tooltip);
        tooltip.style.top = `${event.clientY + 10}px`;
        tooltip.style.left = `${event.clientX + 10}px`;

        option.addEventListener('mouseout', function () {
          document.body.removeChild(tooltip);
        });
      }
    });

    option.addEventListener('click', function () {
      var pagePath = this.dataset.page;
      navOptions.forEach(opt => opt.classList.remove('active'));
      this.classList.add('active');
      window.location.href = pagePath;
    });
  });
});
