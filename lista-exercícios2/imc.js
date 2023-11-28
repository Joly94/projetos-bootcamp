// formula IMC = peso / (altura ** altura)

function calcularImc (peso, altura) {
    return peso / (altura ** altura);
    }

function classificarImc (imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 25) {
        return 'Peso normal';
    } else if (imc >= 26 && imc <= 30) {
        return 'Acima do peso';
    } else if (imc >= 31 && imc <= 40) {
       return 'Obeso';
    } else {
        return 'Obesidade grave';
    }     
}

(function main () {
    var altura = 1.70;
    var peso = 75;
    
    var imc = calcularImc (peso, altura);
})();
