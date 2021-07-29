/*---------------------( M4: Aula #5 à 8: Métodos de Arrays  )---------------------------------------------------------------////

    0. length               - retorna o tamanho do array
    1. toString()           - Útil quando se quer ver os itens do array retornados numa string - separa por virgula
    2. join(arg)            - Retorna uma string com os elementos do array separados pelo caractere informado no parâmetro
    3. indexOf(arg)         - retorna a posição do array onde uma string está contida - retorna -1 quando não acha 
    4. pop()                - remove o último item do array
    5. shift()              - remove o primeiro item do array 
    6. push(arg)            - adiciona uma nova posição no array com o valor informado
    7. delete lista[n]      - deleta o item e deixa o seu espaço vazio, fazendo com que o array tenha ainda o mesmo tamanho
    8. splice(arg1,arg2)    - primeiro arg informa a posição no array, no segundo arg a quantidade de itens que se deseja remover.
    9. concat(arg)          - concatena arrays 
   10. sort()               - ordena os elementos por ordem alfabética  
   11. reverse()            - ordena em ordem reversa - se usado após sort(), retorna em ordem alfabética decrescente
   12. map(function)        - o map (mapeia) percorre o array, permitindo rodar uma função para cada item - retorna um array
   13. filter(function)     - filter permite retornar o item do array com base no valor booleano retornado de uma função passada
   14. every(function)      - retorna um valor boleano com base numa expressão lógica definida numa função, TRUE se e somente se TODOS os item 
    atendem a condição
   15. some(function)       - --- // ---, TRUE se um dos itens atender a condição
   16. find(function)       - Permite retornar O PRIMEIRO ITEM que satisfaça uma condição booleana definida numa função
   17. findIndex(function)  - Permite retornar o INDEX do PRIMEIRO ITEM que satisfaça uma condição booleana definida numa função
*/
let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
let res = lista.toString();
console.log("Array no toString:  ",res); 

res = lista.join('-'); 
console.log("Array no join:  ",res); 

res = lista.indexOf('Ovo'); 
console.log("Array no indexOf:  ",res); 

/* Altera o Array de fato */
lista.pop();/* remove o último item do array */
console.log("Array no pop:  ",lista);
lista.shift(); /* remove o primeiro item do array */
console.log("Array no shift:  ",lista);

lista.push('Ovo'); 
console.log("Array no push: ",lista);

lista[ lista.length ] = 'Massa';
console.log("Array atribuição direta: ",lista) /* outra forma de adicionar um item a uma nova posição do array, nesse caso, temos o auxílio do 
'length'. Se um array tem tamanho de ex.: 14, internamente temos as posições de 0 à 13, sendo o 14 uma posição que ainda não existe. Apesar 
dessa forma poder ser utilizada, o mais recomendado ainda é usar o push()  */

/** --------------------------------------- Métodos de Arrays (2/4)  */
console.log("------------------ Métodos de Arrays (2/4) ");

delete lista[1]; 
res = lista; 
console.log("Array no delete: ",res);

lista.splice(1,1) //Se colocar só um argumento, irá remover todos a partir dessa posição 
console.log("Array no splice: ",lista);

let lista2 = ['Prato', 'Liquidificador','Forno'];

res = lista.concat(lista2); /* Concatena os dois arrays */
console.log("Array no concat: ",res);

lista.sort(); //também recebe argumento (uma função) para realizar formas de ordenação mais avançadas, mas por agora é conteúdo avançado
console.log("Array no sort: ",lista);
lista.reverse(); /* Ordena em ordem reversa - se usado após sort(), retorna em ordem alfabética decrescente */
console.log("Array no reverse: ",lista);

/** --------------------------------------- Métodos de Arrays (3/4)  */
console.log("------------------ Métodos de Arrays (3/4) ");

let lista3 = [45,4,9,16,25]; 
let lista4 = [];
lista4 = lista3.map( function(item){ //referencia direta aos itens do array
    return item * 2;//aqui irá multiplicar todos os itens do array por 2
});
console.log("Array no map: ",lista4);
/* O mesmo poderia ser obtido com um foreach, porém utlizar o map com uma função pode ser mais vantajoso

for(let i in lista3){
    lista4.push(lista3[i]*2);
}
*/
//filter permite retornar o item do array com base no valor booleano retornado de uma função passada
lista4 = lista3.filter(function(item){
    if(item>20){ 
        return true;
    }else{
        return false;
    }
})
console.log("Array no filter: ",lista4);

//retorna um valor lógico com base numa expressão lógica definida numa função, TRUE se e somente se TODOS os item atendem a condição
res = lista3.every(function(item){
    if(item>0){ 
        return true;
    }else{
        return false;
    }
});
console.log("Array no every: ",res);

//retorna um valor lógico com base numa expressão lógica definida numa função, TRUE se um dos itens atender a condição
res = lista3.some(function(item){
    return (item>20)? true:false; 
});
console.log("Array no some: ",res);

/** --------------------------------------- Métodos de Arrays (4/4)  */
console.log("------------------ Métodos de Arrays (4/4) ");

/*Permite retornar o primeiro item que satisfaça uma condição booleana definida numa função. args(item, index, array - ou item e index  -
ou o mais comum somente o item) */
lista4 = lista3.find(function(item){ 
    return (item == 16)? true:false;
});
console.log("Array no find: " ,lista4);

//Permite retornar o index do primeiro item que satisfaça uma condição booleana definida numa função
lista4 = lista3.findIndex(function(item){
    return (item == 16)? true:false;
});
console.log("Array no findIndex: " ,lista4);

let usuarios = [
    {id:1, nome:"Madara", sobrenome: "Uchiha"},
    {id:2, nome:"Naruto", sobrenome: "Uzumaki"},
    {id:3, nome:"Kakashi", sobrenome: "Hatake"}
]
console.log("Retornando usuário: " ,usuarios.find(function(item){ //utilizando o find para fazer uma busca de 'usuário'
        return (item.id==1) ? true : false;
    }
));