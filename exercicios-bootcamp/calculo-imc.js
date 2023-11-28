// formula IMC = peso / (altura ** altura)

var altura = 1.70;
var peso = 75;

var imc = peso / (altura ** altura);
console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal');
} else if (imc >= 26 && imc <= 30) {
    console.log('Acima do peso');
} else if (imc >= 31 && imc <= 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave');
} 