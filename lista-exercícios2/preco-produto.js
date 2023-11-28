/* Calcular o valor pago por um produto considerando o preço normal da etiqueta e a escolha da 
condição de pagamento. 

Código condição de pagamento:
1. Débito à vista = 10% de desconto
2. Dinheiro ou PIX = 15% de desconto
3. Duas vezes no cartão sem juros
4. Acima de duas vezes = 10% juros 
*/

const precoProduto = 100;
const formaPagamento = 2;

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));     
}

function aplicarJuros (valor, juros) {
    return (valor + (valor * (juros / 100)));
}


if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoProduto, 10));
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoProduto, 15));
} else if (formaPagamento === 3) {
    console.log (precoProduto);
} else if (formaPagamento === 4) {
    console.log(aplicarJuros(precoProduto, 10));
}
