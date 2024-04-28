function calcularArea() {
    var raio = parseFloat(document.getElementById('raio').value);
    var area = Math.PI * raio * raio;
    document.getElementById('resultado').innerText = "A área do círculo é: " + area.toFixed(2);
  }