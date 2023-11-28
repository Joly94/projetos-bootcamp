function escreverNome (nome) {
    return 'Meu nome é ' + nome ;
}

//escreverNome(Joly); 

function verificarIdade (idade) {
    if (idade > 18) {
        console.log(escreverNome('Joly e ') + 'você é maior de idade');
    } else {
        console.log('Você é menos de idade');
    }    
}

verificarIdade(29);
