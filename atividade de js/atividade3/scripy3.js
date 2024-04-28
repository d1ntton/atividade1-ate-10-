function calcularSoma() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var soma = num1 + num2;
    document.getElementById('resultado').innerText = "A soma é: " + soma;
  }