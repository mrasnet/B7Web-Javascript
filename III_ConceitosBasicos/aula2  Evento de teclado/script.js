/* --------------------- M3: Aula #2: Evento de teclado -----------------------

    onkeyup             - quando solta a tecla pressionada;
    onkeydown           - quando pressiona uma tecla;

    Para campos de texto o onkeyup é preferível;
    event = referência ao evento em si, assim como o this se refere ao próprio elemento

    Olhando os detalhes de um evento no console, é possível ver seus atributos e acessá-los em condições
*/

//irá retornar os detalhes do evento no console
function digitou(e){
    console.log(e);
}

function digitou2(e){
    if(e.code == "Enter"){ /* ou, e.keyCode == 13 , 13 é igual a Enter. */
       let texto = document.getElementById("campo").value; 
        
        console.log(texto);
    }
}

function digitou3(e){ //Pressionar combinações de teclas
    if(e.keyCode == 13 && e.ctrlKey==true){ 
       let texto = document.getElementById("campo").value; 
        
        console.log(texto);
    }
}