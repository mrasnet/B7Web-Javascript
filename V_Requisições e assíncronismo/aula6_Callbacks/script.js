/* --------------------- #M5 aula #6: Callbacks ----------------------- 

    Se tratando de Javascript 'Callback' - basicamente - é uma função que criamos e mandamos para alguma outra execução - geralmente assíncrona
    Iremos definir que quando esse callback tiver com um resultado, irá executar uma determinada função 
*/

function alertar(){
    console.log("Opa, tudo bem?");
}

let nome = 'Matheus';
//Isso é um callback - basicamente
setTimeout(alertar, 2000);
let sobrenome = 'Souza';
console.log("NOME COMPLETO = "+nome+' '+sobrenome);
