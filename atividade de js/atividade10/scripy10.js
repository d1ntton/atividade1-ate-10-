function converterParaFahrenheit() {
    var tempCelsius = parseFloat(document.getElementById('tempCelsius').value);
    var tempFahrenheit = (tempCelsius * 9/5) + 32;
    document.getElementById('resultado').innerText = "A temperatura em graus Fahrenheit é: " + tempFahrenheit.toFixed(2) + "°F";
  }