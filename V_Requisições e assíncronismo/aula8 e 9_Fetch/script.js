/* --------------------- #M5 aula #8 e #9: Fetch ----------------------- 

    O Fetch é uma função do javascript para realizar requisições

    Nessa aula iremos realizar nossas requisições e iremos utilizar uma API fake para fazer essas requisições. JSONPlaceholder é utilizado para
    testes e prototipagem:
    link: https://jsonplaceholder.typicode.com/

    Os seguintes recursos poderão ser usados para nos retornar dados:

    JSONPlaceholder comes with a set of 6 common resources:

    /posts	        - 100 posts
    /comments	    - 500 comments
    /albums	        - 100 albums
    /photos	        - 5000 photos
    /todos	        - 200 todos
    /users	        - 10 users

    Marjoritariamente o Fetch possui dois parâmetros:
    1. url      - a url da requisição
    2. params   - opcional - objeto onde geralmente colocamos as configurações da requisição

    Se não colocarmos o segundo parâmetro, a requisição será do tipo GET
    No console, em configurações deixar marcado a opção "Log XMLHttpRequest" em console - para melhor visualização apenas
*/

/* Vamos utilizar o objeto 'Response' retornado para transformar o resultado em JSON - Uma vez que já tenhamos o 'Response' já é possível 
visualizar via terminal em: Network -> Name -> ex.: posts. Em 'Response' vemos o JSON em string e em 'Preview' vemos em JSON puro */
function loadPosts(){
    document.getElementById("posts").innerHTML = 'carregando...';

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            /*'json' é uma função do próprio Response para transformar o resultado em JSON e por algum motivo - não bem compreendido - retorna 
            uma promisse */
            return resultado.json();
        })
        .then(function(json){//esse then é da promisse do método 'json'
            console.log(json);
            //document.getElementById("posts").innerHTML = json.length+' posts';//json é um array - aqui mostraria o número de posts
            montarBlog(json);
        })
        .catch(function(error){//Esse catch é do fetch
            console.log("Deu problema!");
        });
}

function montarBlog(lista){
    //montando o html dinamicamente
    let html = '';

    for(let i in  lista){
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'<br/>';
        html += '<hr/>'; //linha horizontal
    }

    document.getElementById("posts").innerHTML = html;
}

/* OBS: Pode ser que em dada situação estejamos abrindo o arquivo HTML não através de um servidor - mesmo que interno - se tivermos abrindo o 
arquivo HTML - puro mesmo - muito provavelmente quando dermos o fetch irá dar o erro chamado "Erro de cores" - cores ref. à 'CORE'.
Assim, não temos como fazer requisições a um site externo através do arquivo aberto com o caminho 'file:caminho_diretório'. Para isso temos que
utilizar ou um servidor interno ou hospedar o arquivo em alguma hospedagem e assim conseguir utilizar acessando normalmente. 
O fato é que temos que acessar através do protocolo HTTP para conseguirmos fazer requisições normalmente. */