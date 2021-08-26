/* --------------------- #M5 aula #7: Promises ----------------------- 

    Quando realizamos uma requisição assíncrona ou um processo assíncrono a gente fica com alguma 'promessa' de resultado
    
    O promise basicamente é uma resultado temporário que recebemos - ou uma promessa - quando recebemos um objeto Promise, recebemos uma 
    promessa de que daqui a algum tempo: - teremos três opções**

    1. Nunca teremos o resultado - é uma promessa, portanto pode ou não se cumprir
    2. Após algum tempo teremos o resultado
    3. Haverá algum problema e receberemos esse problema

    Não iremos trabalhar tanto criando as promisses, mas sim usando elas.

    Temos 3 status para uma promise:

    1. pendente     - em espera; 
    2. finalizado   - deu tudo certo; 
    3. rejeitado    - deu algum erro/problema.
*/

function pegarTemperatura(){
    return new Promise(function(resolve, reject){
        console.log("Pegando temperatura...");

        //simulando o processo de leitura da temperatura
        setTimeout(function(){
            //Usaremos a função 'resolve' caso tudo der certo, e a 'reject' caso algo tenha dado errado
            resolve('40 na sombra');
        }, 2000);
    });
}

// USANDO A PROMISE
console.log("*Código antes");

let temp = pegarTemperatura();

console.log("*Código durante");
//callback básico - 'then' permite executar uma função que fará algo uma vez que obtivermos o resultado da promisse
temp.then(function(resultado){
    console.log("TEMPERATURA: "+resultado);//utiliza o resultado no código
});
//Quando der algum problema - dessa forma temos dois callbacks
temp.catch(function(error){
    console.log("Eita, deu erro!");
});

console.log("*Código depois");

/*  Outra forma válida de declaração

    temp
        .then(function(resultado){
            console.log("TEMPERATURA: "+resultado);
        })
        .temp.catch(function(error){
            console.log("Eita, deu erro!");
        });
*/