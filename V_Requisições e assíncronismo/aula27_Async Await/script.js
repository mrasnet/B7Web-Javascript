/*---------------------( M3: Aula #27: Async/Await  )------------------------------------------------------------


*/

function requisitar(){
    const url = 'https://alunos.b7web.com.br/api/ping';
    const params = {
        method: 'POST',
        //no body se envia os dados
        body: JSON.stringify({//transforma de objeto para string
            nome: 'Matsuhara',
            idade: 25
        })
    };

    //Aqui roda o fetch mas não espera a resposta e continua fazendo a requisição
    fetch(url, params)
        .then( (r) => r.json() )//transforma a resposta em json
        .then((json) => {      //O anterior retorna uma outra promise
            console.log(json);
        });
        //Grande chance da função rodar o fetch e antes desse devolver a resposta, rodar o console.log
        console.log("Alguma coisa");
}   

/* Definimos a função como async - assíncrona - para que instruções fora dessa função não tenham que esperar o termino de execução dessa função
para poderem ser executadas */
async function requisitar2(){
    const url = 'https://alunos.b7web.com.br/api/ping';
    const params = {
        method: 'POST',
    
        body: JSON.stringify({
            nome: 'Matsuhara',
            idade: 25
        })
    };

    //Aqui roda o fetch e vai ficar esperando a resposta, não passa para a próxima instrução
    const r = await fetch(url, params); 
    const json = await r.json();

    console.log(json);
    console.log("Alguma coisa 2");
}

requisitar2();
console.log("Alguma coisa 3");
