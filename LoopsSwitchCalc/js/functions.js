function calcular() {
  var radio = parseFloat(inRadio.value);

  var perimetroRes = 2 * Math.PI * radio;
  var diametroRes = 2 * radio;
  var areaRes = Math.PI * Math.pow(radio, 2);

  outPerimetro.innerHTML = perimetroRes;
  outDiametro.innerHTML = diametroRes;
  outArea.innerHTML = areaRes;
}

function calcularTriangulo() {
  var altura = parseFloat(inAltura.value);
  var base = parseFloat(inBase.value);

  var resultado = (base * altura) / 2;

  outResul.innerHTML = resultado;
}

function calcularCelsius() {
  var gradosFah = parseFloat(inFahren.value);

  var celsius = (gradosFah - 32) * (5 / 9);

  outFahren.innerHTML = celsius + 'º Celsius';
}

function calcularMillas() {
  var kmsIn = parseFloat(inKilom.value);

  var conMillas = kmsIn / 1.609;

  outMillas.innerHTML = conMillas + ' Millas';
}

function convertidorMonedaPes() {
  var peseta = parseFloat(inMoneda.value);

  var pesetaIn = peseta * 0.006;

  outResult.innerHTML = pesetaIn + ' Euros';
}

function convertidorMonedaEur() {
  var euro = parseFloat(inMoneda.value);

  var euroIn = euro * 166.38;

  outResult.innerHTML = euroIn + ' Pesetas';
}
