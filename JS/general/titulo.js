document.addEventListener("DOMContentLoaded", function() {
    var colores = ['#ff00de', '#db00ac', '#e5001e', '#ff00eb'];
    var indiceColor = 0;
  
    function actualizarSombra() {
      var titulo = document.getElementById("titulo");
      titulo.style.textShadow = `0 0 10px ${colores[indiceColor]}, 0 0 15px ${colores[indiceColor]}, 0 0 30px ${colores[indiceColor]}, 0 0 50px ${colores[indiceColor]}`;
      
      indiceColor = (indiceColor + 1) % colores.length;
    }
  
    setInterval(actualizarSombra, 500);
  
    // Agregar la clase para hacer visible el título después de 1.5 segundos
    setTimeout(function() {
      var titulo = document.getElementById("titulo");
      titulo.classList.add("tituloVisible");
    }, 1000);
  });
  
  function actualizarFecha() {
    // Obtener la fecha actual
    var fechaActual = new Date();
  
    // Formatear la fecha como deseado
    var formatoFecha = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
  
    // Convertir la fecha a texto con el formato especificado
    var fechaFormateada = fechaActual.toLocaleDateString('es-ES', formatoFecha);
  
    // Convertir el día de la semana a mayúsculas
    var diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    var indiceDia = fechaActual.getDay();
    var diaMayuscula = diasSemana[indiceDia].charAt(0).toUpperCase() + diasSemana[indiceDia].slice(1);
  
    // Convertir el nombre del mes a mayúsculas
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var indiceMes = fechaActual.getMonth();
    var mesMayuscula = meses[indiceMes].charAt(0).toUpperCase() + meses[indiceMes].slice(1);
  
    // Reemplazar el día de la semana y el nombre del mes en la fecha formateada con las versiones en mayúsculas
    fechaFormateada = fechaFormateada.replace(diasSemana[indiceDia], diaMayuscula);
    fechaFormateada = fechaFormateada.replace(meses[indiceMes], mesMayuscula);
  
    // Mostrar la fecha en el div con id "fecha"
    var mensaje = "Dia del evento: " + fechaFormateada;
    document.getElementById('fecha').innerText = mensaje;
  }
  
  // Llamar a la función actualizarFecha cada segundo (1000 milisegundos)
  setInterval(actualizarFecha, 1000);
  