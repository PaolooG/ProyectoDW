
const mostrarBtn = document.getElementById('mostrarBtn');
var ventanaInformacion = document.getElementById('ventanaInformacion');
const cerrarBtn = document.getElementById('cerrarBtn');

mostrarBtn.addEventListener('click', () => {
    ventanaInformacion.style.display = 'block';
});

cerrarBtn.addEventListener('click', () => {
    ventanaInformacion.style.display = 'none';
});

const mostrarBtn2 = document.getElementById('mostrarBtn2');
var ventanaInformacion2 = document.getElementById('ventanaInformacion2');
const cerrarBtn2 = document.getElementById('cerrarBtn2');

mostrarBtn2.addEventListener('click', () => {
    ventanaInformacion2.style.display = 'block';
});

cerrarBtn2.addEventListener('click', () => {
    ventanaInformacion2.style.display = 'none';
});