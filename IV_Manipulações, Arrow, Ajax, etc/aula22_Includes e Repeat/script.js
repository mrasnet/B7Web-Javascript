/*---------------------( M4: Aula #22: Includes e Repeat )------------------------------------------------------------
   
    includes    - permite verificar se um dado char ou texto existe num dado array/string, retornando um boolean.
    repeat      - repete um dado char ou string n vezes de acordo com o valor passado no argumento - funciona tanto para strings como variáveis

*/
//uso do includes
let lista = ['ovo', 'café', 'arroz', 'feijão', 'macarrão'];

console.log(lista.includes('ovo'));

let nome = "Matheus";

console.log(nome.includes('z'));

//uso do repeat
console.log('x'.repeat(20));
console.log(nome.repeat(2));
