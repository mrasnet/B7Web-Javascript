/*---------------------( M4: Aula #19: Arrow Functions )------------------------------------------------------------
    
    A única diferença entre uma função declarada na forma convencional e uma Arrow function (função anonima) é que, na Arrow Function não temos
    o objeto this, se em algum momento numa função vai ser necessário o uso do this, o recomendado é utilizar a forma convencional para 
    declaração de funções.
*/

/* forma convencional
function somar(x,y){
    return x+y;
}*/ 

//let somar = function(x,y){ return x+y; }   segunda forma de declaração - passando a função para uma variável

//Função utilizando o array function - pode ser definido com qualquer var, normalmente utilizam const
let somar = (x,y) => { return x+y; }

//outra forma, para quando temos apenas uma instrução. Nessa, o uso do return é desnecessário
let sum = (x,y) => x+y;

console.log(somar(20,5));
console.log(sum(10,5));

//variação: quando se tem apenas um argumento sendo passado, os parenteses são opcional
let letrasNoNome = nome => nome.length;
console.log(letrasNoNome('Matheus'));
