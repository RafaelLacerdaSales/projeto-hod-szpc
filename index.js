const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')
const informacoes = document.querySelectorAll('.informacoes')

botoesCarrossel.forEach((botao , indice) =>{
    botao.addEventListener('click', ()=>{
    
        desativandoBotaoSelecionado();
        botao.classList.add('selecionado');

        esconderImagemAtiva();
        imagens[indice].classList.add('ativa')

        esconderInformacaesAtivas();
        informacoes[indice].classList.add('ativo')   
    });
});

function esconderInformacaesAtivas() {
    const informacoesAtiva = document.querySelector('.informacoes.ativo');
    informacoesAtiva.classList.remove('ativo');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativandoBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

