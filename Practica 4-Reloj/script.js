
function select(tag){
    const val = document.querySelector(tag)
    return val
  }
  
  function updateTag(tag, contenido){
    const mi_tag = select(tag)
    mi_tag.innerHTML = contenido
  }
  function updateHour(){
  // const fecha = new Date()
  // const horas = fecha.getHours()
  // const minutos = fecha.getMinutes()
  // const segundos = fecha.getSeconds()
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: false };
  const horaEnFormato24Horas = now.toLocaleTimeString('es-ES', options);
  const [horas, minutos, segundos] = horaEnFormato24Horas.split(":")
    
    
    
  updateTag("#horas", horas)
  updateTag("#minutos", minutos)
  updateTag("#segundos", segundos)
  }
  
  
  setInterval(updateHour,500)
  