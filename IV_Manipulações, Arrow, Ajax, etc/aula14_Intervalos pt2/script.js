/*---------------------( M4: Aula #14: Intervalos pt2 )----------------------------------------------------
    
    Intervalos (timers) : permite definir um tempo em que um dado código irá rodar 
    
    1. setTimeout : vai esperar um determinado tempo e rodar uma função - só pode ser parado antes de ser executado, no caso pelo o 
        clearTimeout
    2. setInterval: a cada x tempo irá rodar uma determinada função - não para a não ser que seja parado pelo o clearInterval

    Como o setTimeout só vai executar a função uma única vez quando chamado, geralmente se usa da seguinte forma:
    setTimeout(function, miliseconds)
    Mas podemos usar passando para uma variável também, caso queiramos pará-lo num clearTimeout
*/

let timer; 

function rodar(){
    //Aqui atribuimos o resultado de setTimeout na var timer para podermos usar na função parar caso quisermos
    timer = setTimeout(function(){
        document.querySelector('.demo').innerHTML = 'Rodou!';
    }, 2000)//vai esperar 2 segundos e rodar a função
}

function parar(){
    clearTimeout(timer);//irá parar o timeout antes dele executar
}