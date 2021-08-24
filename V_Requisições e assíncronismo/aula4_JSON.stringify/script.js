/* --------------------- #M5 aula #4: JSON.stringify ----------------------- 

    O contrário da função 'parse' - irá pegar um JSON e transformá-lo em string.
*/

let reqResult = {
    nome: "Naruto", 
    idade: 22,
    caracteristicas: ["não desiste nunca", "ama lamen", "manja dos jutsus"]
};
//transformando JSON em string
pessoa = JSON.stringify(reqResult);
console.log(pessoa);
//transformando em JSON a partir da string 
pessoa = JSON.parse(pessoa);
console.log(pessoa);
