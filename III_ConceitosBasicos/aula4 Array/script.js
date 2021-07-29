/* --------------------- M3: Aula #4: Array ----------------------- 

    declaração:                  - tipo varnome = [ elem1, elem2 .... elem6] 
    declaração 2ª:               - tipo varnome = new Array(elem1, elem2 .... elem6) - forma menos convencional
    acesso:                      - varnome (se deseja acessar tudo) / varnome[i]  - i = indice do vetor 

    # É possível ter funções dentro de um array. No caso, é uma função sem nome, onde sua referencia é seu índice

    Array de Arrays: 

    declaração:                  - tipo varnome = [ [a,b,c] , [a,b] ]
    acesso:                      - varnome[a][i] (a = array / i = indice)
*/

let carro = [ //mesma coisa: let carro = ['Palio','Uno','Corolla','Ferrrari'];
    'Palio',
    'Uno',
    'Corolla',
    'Ferrrari',
    function(){//se declara sem nome
        console.log("função no array!");
    }
];
console.log(carro); 
carro[4](); //chamando a função que tá na posição 4 do array

//forma tradicional de declaração, menos usada hoje em dia
let carros = new Array ('Palio','Uno','Corolla','Ferrrari','Fiat');
console.log(carros);

//Array de Arrays
let ingredientes = [
    ['uva','pera','maçã'],
    ['arroz','macarrão']
];
console.log(ingredientes)//exibe tudo
console.log( ingredientes[1] );//exibe o array na posição 2
console.log( ingredientes[1][0] ) //exibe o primeiro item do array de posição 2 