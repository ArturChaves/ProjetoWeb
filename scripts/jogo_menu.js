const menu_jogo = document.getElementById('teste');
const jogo =  document.getElementById('canvas');

function inciar(){
    menu_jogo.style.display = 'none'
    jogo.style.display = 'block'
}


function terminar_fase(){
    menu_jogo.style.display = 'block'
    jogo.style.display = 'none'



}