function converterParaCentimetros() {
    var metros = parseFloat(document.getElementById('metros').value);
    var centimetros = metros * 100;
    document.getElementById('resultado').innerText = metros + " metros equivalem a " + centimetros + " centímetros.";
  }