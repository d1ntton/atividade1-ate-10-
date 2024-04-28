
function calcularAreaEDobro() {
    var lado = parseFloat(document.getElementById('lado').value);
    var area = lado * lado;
    var dobroDaArea = area * 2;
    document.getElementById('resultado').innerText = "A área do quadrado é: " + area + ". O dobro desta área é: " + dobroDaArea + ".";
    }