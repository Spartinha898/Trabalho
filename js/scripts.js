window.addEventListener('DOMContentLoaded', function () {
    const horarios = document.querySelectorAll('.list-hours li');
    const diaAtual = new Date().getDay();

    if (horarios[diaAtual]) {
        horarios[diaAtual].classList.add('today');
    }
    const carrossel = document.querySelector('#carrosselPizzaria');
    if (carrossel) {
        new bootstrap.Carousel(carrossel, { interval: false });
    }
});
