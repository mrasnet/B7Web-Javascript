/* --------------------- Aula #5: Variáveis(1/2) -----------------------

    No Javascript, em strings se usa tanto aspas simples ou duplas
*/

var nome = "Matheus"; 
var sobnome= 'Souza';
var ncompleto = nome+" "+sobnome;
var idade = 25;
var x = 20;
var y = 15;
var total = x+y;

ncompleto += ", idade é "+idade; /* concatena string e dado numérico igual string. Quando o interpretador ver que uma das variáveis é uma 
string, ele concatena tudo */

alert(ncompleto);
alert(total);