/* --------------------- #M5 aula #10: Async e Await ----------------------- 

    A utilização do Async e Await é recurso novo que irá facilitar nossa vida bastante.
    irá fazer o código esperar o 'resultado' - Muito importante entender a utilização para que possamos criar mais coisas com menos código
*/

//async - irá dizer que dentro da função estaremos utilizando o 'await' - apenas colocar o 'async' na assinatura do método não muda em nada 
/* Se criarmos a função na forma de variável:

ex.: let loadposts = async () =>{}
*/
async function loadPosts(){
    document.getElementById("posts").innerHTML = 'carregando...';

    /** Código anterior - dessa forma irá ficar esperando o resultado sempre antes de ir para o próximo comando - após explicado a primeira 
    forma - a mais dificil - a partir de agora utilizaremos dessa forma - a mais fácil */
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    montarBlog(json);

    /** CÓDIGO ASSÍNCRONO - antes
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            //'json' é uma função do próprio Response para transformar o resultado em JSON e por algum motivo - não bem compreendido - retorna uma promisse     
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
        */
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