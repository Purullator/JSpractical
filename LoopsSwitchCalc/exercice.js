function calcular4() {
  var num = parseInt(inNum.value);
  var resultado = 'ES PRIMO';

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      resultado = 'NO ES PRIMO';
      break;
    }
  }

  outResultado.innerHTML = resultado;
}

function calcular() {
  var num = parseInt(inNum.value);
  var i = 1;

  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      outResultado.innerHTML = i + ', ';
    }
  }
}
function sumar() {
  var resultado = 0;

  var n1 = parseInt(inNum1.value);
  var n2 = parseInt(inNum2.value);

  for (let i = n1; i <= n2; i++) {
    resultado += i;

    outResultado.innerHTML = resultado;
  }
}

function calcular1() {
  outResultado.innerHTML = '';
  var num1 = parseFloat(inNum.value);
  var total = 1;

  for (let i = num1; i > 0; i--) {
    total *= i;

    outResultado.innerHTML = `El factorial de ${num1} es ${total}`;
  }
}
function calcular2() {
  var num = parseInt(inNum.value);
  var i = 1;

  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      outResultado.innerHTML = i + ', ';
    }
  }
}

for (let i = 1; i <= 10; i++) {
  document.write('Hola Mundo' + i);
}

let i1 = 1;
while (i1 <= 10) {
  document.write('Hola mundo ' + i);
  i1++;
}

let i2 = 1;
do {
  document.write('Hola Mundo' + i2);
  i2++;
} while (i <= 10);

for (let i = 1; i <= 10; i++) {
  document.write(i);
}

let i3 = 1;
while (i3 <= 10) {
  document.write(i);
  i3++;
}

let i4 = 1;
do {
  document.write(i4);
  i4++;
} while (i4 <= 10);

for (let i = 2; i <= 100; i += 2) {
  document.write(i);
}

let i5 = 2;
while (i5 <= 100) {
  document.write(i5);
  i5 += 2;
}

let i6 = 2;
do {
  document.write(i6 + ',');
  i6 += 2;
} while (i6 <= 100);

for (let i = -27; i <= 27; i += 3) {
  document.write(i + ',');
}

let i = -27;
while (i <= 27) {
  document.write(i + ' ,');
  i += 3;
}

for (i = 100; i >= 5; i -= 5) {
  document.write(i + ',');
}

i = 100;
while (i >= 5) {
  document.write(i + ',');
  i -= 5;
}

for (i = 1; i <= 10; i++) {
  document.write(2 ** i + ', ');
}

function contar() {
  var numero = parseInt(inNumero.value);
  var resultado = '';

  for (let i = 1; i <= numero; i++) resultado += i + ', ';

  outResultado.innerHTML = resultado;
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    document.write(i + ' x ' + j + ' = ' + i * j + '<br>');
  }
  document.write('<br>');
}
