/*---------------------( M4: Aula #23: Objeto: Key, Values e Entries )------------------------------------------------------------
   
    Serve tanto para arrays como para objetos - arrays também são objetos:

     Object.keys(array/object)          - retorna um array com os index/chaves
     Object.values(array/object)        - retorna um array com os valores somente
     Object.entries(array/object)       - retorna um array de arrays - esses compostos por index/chave (como valor) e o valor em si

    Muito útil quando se quer ver propriedades de um array/objeto, ao debugar por exemplo.
*/
//Com Arrays
let lista = ['ovo', 'macarrão', 'feijão', 'pipoca'];

console.log( Object.keys(lista));
console.log( Object.values(lista));
console.log( Object.entries(lista));

//Com Objetos
let pessoa = {
    nome: 'Matheus',
    sobrenome: 'Souza',
    idade: 25
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));
