/* Calcular o valor pago por um produto considerando o preço normal da etiqueta e a escolha da 
condição de pagamento. 

Código condição de pagamento:
1. Débito à vista = 10% de desconto
2. Dinheiro ou PIX = 15% de desconto
3. Duas vezes no cartão sem juros
4. Acima de duas vezes = 10% juros 
*/

const precoProduto = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    const desconto = precoProduto * 0.1;
    console.log('Valor do desconto:', desconto, 'reais');
    const valorPagar = precoProduto - 10;
    console.log('Valor a pagar:', valorPagar, 'reais');
} else if (formaPagamento === 2) {
    const desconto = precoProduto * 0.15;
    console.log('Valor do desconto:', desconto, 'reais');
    const valorPagar = precoProduto - 15;
    console.log('Valor a pagar:', valorPagar, 'reais');
} else if (formaPagamento === 3) {
    const valorPagar = precoProduto;
    console.log(valorPagar);
} else if (formaPagamento === 4) {
    const valorJuros = precoProduto * 0.1;
    console.log('Valor juros:', valorJuros, 'reais');
    const valorPagar = precoProduto + valorJuros;
    console.log('Valor a pagar:', valorPagar, 'reais');
}
