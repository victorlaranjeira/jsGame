let listaDeNUmeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número Secreto!');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10:');

}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'o número secreto é maior');
        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosLista = listaDeNUmeroSorteados.length;

    if (quantidadeDeElementosLista == numeroLimite){
        listaDeNUmeroSorteados = [];
    }
    if(listaDeNUmeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNUmeroSorteados.push(numeroEscolhido);
        console.log(listaDeNUmeroSorteados);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute  = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    tentativas = 1;
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);


}