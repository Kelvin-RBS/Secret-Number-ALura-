alert("Boas vindas ao jogo do número secreto!\nCriado por Kelvin M. Ribas\n(primeiros passos da programação !!!)");

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let DumbOrLuck = "";
console.log(`É o ${numeroSecreto}.`);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
        {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Olá, bem vindo ao jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!\nDEU SORTE !!!';
        let mensagemTentativas = `Era o ${numeroSecreto}, você acertou com ${tentativas} ${palavraTentativa}\n${DumbOrLuck}`;
        exibirTextoNaTela('h1', 'Muito bem!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();

        if (tentativas >= 100 / 15) {
            DumbOrLuck = "FORAM MUITAS TENTATIVAS SEU BURRO!!!";
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    DumbOrLuck = "";
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.clear();
    console.log(`É o ${numeroSecreto}.`);
}








