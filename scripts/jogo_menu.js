const menu_jogo = document.getElementById('teste');
const comojogar = document.getElementById('como_jogar');
const fim = document.getElementById('fim_do_jogo');
const jogo =  document.getElementById('canvas');

function iniciar(){
    menu_jogo.style.display = 'none'
    jogo.style.display = 'block'
}


function terminar_fase(){
    fim.style.display = 'block'
    jogo.style.display = 'block'
    jogo.style.zIndex = -1

}

function jogar_novamente(){
    fim.style.display = 'none'
    location.reload()
}

function f_comojogar(){
    comojogar.style.display = 'block'
    menu_jogo.style.display = 'block'
    menu_jogo.style.zIndex = -2
}

function fechar_comojogar(){
    comojogar.style.display = 'none'
    menu_jogo.style.zIndex = 1
}