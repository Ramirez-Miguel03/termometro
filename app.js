document.querySelector('.actualizar-btn').addEventListener('click', function() {
    actualizarTemperatura();
  });

  function actualizarTemperatura() {
    // Código para obtener la temperatura actual del campo (puede ser a través de una API, por ejemplo)
    var temperaturaActual = '20°C';
    
    // Actualiza el texto de la temperatura en el box
    document.querySelector('.temperatura-numero').textContent = temperaturaActual;
    
    // Anima el termómetro para mostrar la temperatura actual
    var alturaMercurio = parseFloat(temperaturaActual) * 2;
    document.querySelector('.termometro').style.clip = 'rect(' + (200 - alturaMercurio) + 'px, 50px, 200px, 0)';
  }
  