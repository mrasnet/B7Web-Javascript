/*--------------------- M3: Aula #7: Projeto: Menu de Navegação -----------------------

    contains(string)              - permite verificar se uma dada classe está contida na lista de classes
*/

//------- primeira forma -------
//Quando temos alguma coisa que faz 'alguma coisa' e em seguida ao ser acionado novamente, volta ao seu estado normal, chamamos de 'toggle'
function menuToggle(){
    let menuArea = document.getElementById("menu-area");

    if(menuArea.classList.contains('menu-opened')==true){
        menuArea.classList.remove('menu-opened');
    }else{
        menuArea.classList.add('menu-opened');
    }

}

//------ segunda forma ------------
function exibeMenu(){
    let menuArea = document.getElementById("menu-area");
    //por um motivo desconhecido, quando inverte a lógica dos if e else, o menu não altera no primeiro clique
    if(menuArea.style.width=='200px'){
        menuArea.style.width='0px';
    }  
    else{
        menuArea.style.width='200px';
    }       
}
console.log(document.getElementById("menu-area"));