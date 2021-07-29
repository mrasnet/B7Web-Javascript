/*---------------------( M4: Aula #15: Template Strings )----------------------------------------------------
    
    Template Strings :      permite escrever códigos mais legíveis  - praticamente uma forma nova de criar strings
    dentro de uma string com ``:     ${var}     ou, ${var_com_expressão}
*/

let nome = 'Matheus';
let idade = 25;

//forma convencional  - geralmente declaramos strings com aspas simples ou duplas, mas esse tipo de aspas também funciona
let frase = `Meu nome é `+nome+`, eu tenho `+idade+` anos e ano que vem farei `+(idade+1)+` anos`; 
//Esse tipo de 'aspas' aqui, é o acento agudo na posição inversa   - observe que com Tamplate String, a string (código) se torna mais legível
let frase2 = `Meu nome é ${nome}, eu tenho ${idade} anos e ano que vem farei ${idade+1} anos`; 

//mesmo efeito em ambos
console.log(frase);
console.log(frase2);