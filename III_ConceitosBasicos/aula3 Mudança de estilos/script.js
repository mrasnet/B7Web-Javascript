/* --------------------- M3: Aula #3: Mudança de estilos -----------------------

    classList       - permite atribuir uma lista de classes a um elemento
    add             - adiona uma classe à lista de classes
    remove          - remove uma classe de uma lista de classes 
*/
function azul(){
    limpar();
    document.getElementById("titulo").classList.add('azul');
}

function vermelho(){
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}

function verde(){
    limpar();
    document.getElementById("titulo").classList.add('verde');
}

function limpar(){
    document.getElementById("titulo").classList.remove('azul');
    document.getElementById("titulo").classList.remove('vermelho');
    document.getElementById("titulo").classList.remove('verde');
}

function mostrarTelefone(elemento){//alterando diretamente o estilo, o valor block faz exibir
    elemento.style.display="none";
    document.getElementById("telefone").style.display="block";
}