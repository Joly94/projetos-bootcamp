/* 
Crie uma classe para representar pessoas.
Para cada pessoa teremos atributo nome, peso e altura.
As pessoas devem ter capacidade de dizer seu IMC (IMC = peso / (altura * altura)).
Instancie uma pessoa chamada Joly que tenha 70kg de peso e 1,75 de altura e peça ao Joly para dizer
o valor do seu IMC 
*/

class Pessoa {
    nome;
    peso;
    altura;

constructor (nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
}

calcularImc () {
    return this.peso / (this.altura * this.altura);
}

classificarImc() {
    const imc = this.calcularImc();
if (imc < 18.5) {
       return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 25) {
       return ('Peso normal');
    } else if (imc >= 26 && imc <= 30) {
       return ('Acima do peso');
    } else if (imc >= 31 && imc <= 40) {
       return ('Obeso');
    } else {
       return ('Obesidade grave');
    } 

}
    
}

const joly = new Pessoa ('joly', 70, 1.75); 
console.log(joly.classificarImc());

