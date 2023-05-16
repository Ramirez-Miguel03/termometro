const actualizarBtn = document.getElementById('actualizar-btn');
const temperaturaNumero = document.querySelector('.temperatura-numero');

actualizarBtn.addEventListener('click', () => {
  fetch('https://x230vnbpw4.execute-api.us-east-2.amazonaws.com/test/arduino-termometro')
    .then(response => response.json())
    .then(data => {
      temperaturaNumero.textContent = `${data.temperature}°C`;
    })
    .catch(error => console.error(error));
});
  