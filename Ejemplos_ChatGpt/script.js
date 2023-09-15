// script.js
const mostrarBtn = document.getElementById('mostrarBtn');
const ventanaInformacion = document.getElementById('ventanaInformacion');
const cerrarBtn = document.getElementById('cerrarBtn');

mostrarBtn.addEventListener('click', () => {
    ventanaInformacion.style.display = 'block';
});

cerrarBtn.addEventListener('click', () => {
    ventanaInformacion.style.display = 'none';
});
