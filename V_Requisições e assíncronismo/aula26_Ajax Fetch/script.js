/*---------------------( M3: Aula #26: Ajax/Fetch  )------------------------------------------------------------
    
    Permite realizar requisições Ajax de forma simples - antes era mais complicado
*/
//para visualizar abrir o console -> network -> ping -> Headers -> Request Payload

//O seguinte é suficiente para mandar uma requisição do tipo POST para a url especificada, enviando os seguintes dados como dados da requisição
const url = 'https://alunos.b7web.com.br/api/ping';
const params = {
    method: 'POST',
    //no body se envia os dados
    body: JSON.stringify({//transforma de objeto para string
        nome: 'Matsuhara',
        idade: 25
    })
};
//apenas a url já é suficiente para criar uma requisição
fetch(url, params)
    .then( (r) => r.json() )//transforma a resposta em json
    .then((json) => {//O anterior retorna uma outra promise
        console.log(json);//
    });
