function converterParaCelsius() {
    var tempFahrenheit = parseFloat(document.getElementById('tempFahrenheit').value);
    var tempCelsius = 5 * ((tempFahrenheit - 32) / 9);
    document.getElementById('resultado').innerText = "A temperatura em graus Celsius é: " + tempCelsius.toFixed(2) + "°C";
}