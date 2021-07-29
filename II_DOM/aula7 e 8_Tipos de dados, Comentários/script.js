/*  #M2  aula #7 #8: Tipos de dados / comentários
   
    String / number / boolean (true - false) / undefined
    typeof              - retorna o tipo de uma variável 

    Há outros tipos, como array e objeto, mas serão vistos mais a frente
*/
var nome="MathRoni"; //String
var idade=90; //number
var logico=true; //boolean
var cidade; //quando não tem valor o tipo é indefinido - undefined

/* Para ver o tipo de cada variável, no console digite typeof <var_nome>.
No código a seguir, é armazenado o tipo da var idade como valor na var tipo
*/
var tipo = typeof idade;
console.log(tipo);