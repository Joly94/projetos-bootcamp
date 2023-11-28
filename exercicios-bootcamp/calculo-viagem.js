
const precoEtanol = 3.29;
const precoGasolina = 5.26;
const noCarro = 'Gasolina';
const kmPorLitro = 10;
const distanciaKm = 470;

const litrosConsumidos = distanciaKm / kmPorLitro;


if (noCarro === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto);
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto);
    }
