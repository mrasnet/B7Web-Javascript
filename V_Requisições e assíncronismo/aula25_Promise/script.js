/*---------------------( M3: Aula #25: Promise )------------------------------------------------------------
    
    Se utiliza quando se precisa de uma "promessa" - mensagem de garantia de que tal processo (que apresenta demora na resposta) vai retornar algo.

    Ambos são definidos dentro da Promise:

    resolve      - usado para mandar a mensagem em si
    reject       - usado para mandar mensagem de erro

    Ainda que não venhamos a criar nossas próprias promises, iremos utilizá-las, pois há muitas funções que as utilizam 
*/
function fazer(){
    //dentro da promise é necessário mandar uma função com os parametros: resolve / reject - ambas são funções
    let promise = new Promise((resolve, reject) => {
        
        setTimeout(()=>{//setTimeout para simular uma espera

            //ex.: outros comandos**** requisição a banco de dados, webservices etc.
            resolve('OK'); //resposta 
            //Por enquanto não foi utilizado o reject
        }, 3000);
    });

    return promise; //ou, return new Promise
}

//Quem executar a função 'fazer' saberá imediatamente que vai receber uma promessa - que em determinado momento receberá um resposta dessa 
//Ordem: executou o 'fazer', vai esperar uma resposta e quando a tiver vai fazer algo definido com ela na função que vai dentro do 'then'
//alguns programadores organizam da seguinte forma a chamada
fazer()
    .then((resposta)=>{//Recebe a resposta quando disponível
        console.log("Resposta: "+resposta);//Utiliza essa resposta junto de comandos dentro da função
});
