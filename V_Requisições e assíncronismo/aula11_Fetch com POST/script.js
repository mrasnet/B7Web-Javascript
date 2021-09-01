/* --------------------- #M5 aula #11: Fetch com POST ----------------------- 

    Fazer requisições com outros métodos - enviando principalmente, corpo, dados dessa requisição, cabeçalho etc. - segundo parametro do fetch

    JsonPlaceholder link: https://jsonplaceholder.typicode.com/

    Em JsonPlaceholder temos as rotas e nos é dito os métodos suportados em cada uma das rotas:
    
    Routes 
    All HTTP methods are supported. You can use http or https for your requests.

    GET	        /posts
    GET	        /posts/1
    GET	        /posts/1/comments
    GET	        /comments?postId=1
    POST	    /posts
    PUT	        /posts/1
    PATCH	    /posts/1
    DELETE	    /posts/1

    Para o nosso caso, para o método POST temos apenas a rota '/posts': link: https://jsonplaceholder.typicode.com/posts

*/

async function inserirPost(){
    document.getElementById('posts').innerHTML = "Carregando...";

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        //Quando definimos o método como 'POST' os dados são enviados no corpo da requisição - o corpo define o envio interno
        //Se utilizarmos o método GET, não definiremos o corpo, pois para o método GET não se define corpo
        method: 'POST',
        //Para o body tem que ser enviado uma string com o objeto dentro
        body: JSON.stringify({//Aqui iremos precisar utilizar a função 'Stringify' para criar o objeto com os dados a enviar
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 4
        }),
        //Temos ainda outras opções de coisas que podemos colocar aqui - podemos definir um ou mais cabeçalhos
        headers: {
            'Content-Type' : 'application/json'
            /* Se tivermos também fazendo uma autenticação - ex.: para fazer essa requisição ser preciso estar autenticado, mandar um token de 
            autenticação. Poderiamos fazer o envio por aqui também */
        }

    });

    let json = await req.json();
    /* Deverá ocorrer um 'erro de cores' - geralmente culpa do próprio servidor - provavelmente será porque não estamos utilizando o 
    protocolo HTTPS, nisso será negado o envio de nossos dados, porém poderemos visualizar se formos no console -> network -> posts - > headers: 
    
    Em 'Request Payload' iremos ver que mandamos nossos dados - o erro que venha a ocorrer pode ser também porque desabilitaram requisições
    do tipo POST para a URL enviada.
    De toda forma, sem problema nenhum, conseguimos ver a requisição POST acontecendo. */
    console.log(json);

}