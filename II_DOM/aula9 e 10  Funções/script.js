/*  #M2  aula #9 e #10: Funções

    1. função sem argumento
    2. função com argumento
    3. função com multiplos argumentos
    4. função com retorno
*/

function altera(){
    document.getElementById("titulo").innerHTML="Alterado h1 pela a função";
    document.getElementById("subtitulo").innerHTML="Subtitulo alterado na função";
    document.getElementById("campo").value="função no campo";
}
altera(); //chamando altera *************

function altera2(valor){ //se chamado no console permite alterar o valor dinamicamente
    document.getElementById("titulo").innerHTML=valor;
    document.getElementById("subtitulo").innerHTML=valor;
    document.getElementById("campo").value=valor;
}

function somar(x,y){
    let total = x+y; 
    document.getElementById("campo").value=total;
}

function somar2(x,y){
    let total = x+y; 
    
    return total;
}

var resultado = somar2(10,15); //chamando a função e atribuindo valor retornado na variável *******
console.log(resultado);