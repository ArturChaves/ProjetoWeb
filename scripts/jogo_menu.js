const menu_jogo = document.getElementById('teste');
const fim = document.getElementById('fim_do_jogo');
const jogo =  document.getElementById('canvas');

function inciar(){
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