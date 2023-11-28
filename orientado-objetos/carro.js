/* 
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodados.
Crie um método que, dado a quantida de km e o preço do combustível, nos dê o valor gasto em reais
para realizar esse percurso 
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm; 
}

    calcularGastoPercurso (distanciaKm, precoCombustível) {
        return distanciaKm * this.gastoMedioPorKm * precoCombustível;
    }

 }

 const onix = new Carro ('Chevrolet', 'branco', 1/12); 
 
 console.log(onix.calcularGastoPercurso(470, 3.29));

