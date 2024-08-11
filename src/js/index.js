//passo 1 - dar um jeito de pegar o elemento HTML dos botão
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".image");
const informacoes = document.querySelectorAll(".informacoes")
//passo 2 - dar um jeito de indentificar o clique do usuario 
botoesCarrossel.forEach((botao, indice) => {
botao.addEventListener('click', () => {
    //passo 3 - desmacar o botão selecionado anterior
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove("selecionado");
    //passo 4 - marcar o botão clicado como se tivesse selecionado
    botao.classList.add("selecionado");
    //passo 5 - esconder a imagem anteriormente selecionada 
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove("ativa");
    //passo 6 - aparecer a imagem correspondente ao botão clicado
    imagens[indice].classList.add("ativa");
    //passo 7 - remover o texto.
    const insformacoesAtiva = document.querySelector(".informacoes.ativa");
    insformacoesAtiva.classList.remove("ativa");
    // passo 8 exibir o texto.
    informacoes[indice].classList.add("ativa");
});
});
