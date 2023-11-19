function select(tag) {
  const val = document.querySelector(tag);
  return val;
}

function updateTag(tag, contenido) {
  const mi_tag = select(tag);
  mi_tag.innerHTML = contenido;
}

function updateHour() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  const horaEnFormato24Horas = now.toLocaleTimeString('es-ES', options);
  const [horas, minutos, segundos] = horaEnFormato24Horas.split(":");

  updateTag("#horas", horas);
  updateTag("#minutos", minutos);
  updateTag("#segundos", segundos);
}

function copiarAlPortapapeles(texto) {
  const elementoTemporal = document.createElement('textarea');
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  document.execCommand('copy');
  document.body.removeChild(elementoTemporal);
}

const reloj = select("#reloj");
reloj.addEventListener('click', function () {
  const textoReloj = reloj.textContent;
  copiarAlPortapapeles(textoReloj);
  alert('Texto del reloj copiado al portapapeles');
});

const fondos = [
  'https://i.gifer.com/XOsX.gif',
'https://i.pinimg.com/originals/82/d5/ad/82d5ad37ac5093c229c2b1924ce6c72b.gif',
  'https://upload.wikimedia.org/wikipedia/commons/b/be/Spinning_Duck.gif',
];

const fondoAleatorio = fondos[Math.floor(Math.random() * fondos.length)];
document.body.style.backgroundImage = `url('${fondoAleatorio}')`;

setInterval(updateHour, 500);
  
