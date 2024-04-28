function calcularSalario() {
    var ganhoPorHora = parseFloat(document.getElementById('ganhoPorHora').value);
    var horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);
    var salarioMensal = ganhoPorHora * horasTrabalhadas;
    document.getElementById('resultado').innerText = "O total do seu salário no mês é: R$ " + salarioMensal.toFixed(2);
  }