/* #M2  aula #5 #6: Manipulando Class do elemento

    ClassList               - retorna uma lista de classes  - 3 principais funções:
        contains            - retorna um boolean informando se ClassList contém tal classe
        add                 - permite adicionar uma classe à ClassList
        remove              - permite remover uma classe da ClassList
*/

function verde(){
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('verde');
}
function vermelho(){
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('vermelho');
}
function azul(){
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.add('azul');
}

function trocar(){
    let botao = document.querySelectorAll('button')[3];
    let isPurple = botao.classList.contains('roxo');
    
    
    if(isPurple){
        botao.classList.remove('roxo');
        botao.classList.add('rosa');
    }else{
        botao.classList.remove('rosa');
        botao.classList.add('roxo');
    }
}