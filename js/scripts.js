/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', function () {
    const horarios = document.querySelectorAll('.list-hours li');
    const diaAtual = new Date().getDay();

    if (horarios[diaAtual]) {
        horarios[diaAtual].classList.add('today');
        horarios[diaAtual].setAttribute('aria-current', 'date');
    }
    const carrossel = document.querySelector('#carrosselPadaria');
    if (carrossel) {
        new bootstrap.Carousel(carrossel, { interval: false });
    }
});
