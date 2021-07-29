/*   M4: Aula #1 #2 e #3: Métodos de String

    Resumo métodos de string:

    1. length                            - retorna o número de caracteres presentes na string
    2. indexOf(arg)                      - retorna a posição onde o texto passado começa
    3. slice(arg1,arg2) / slice(arg1)    - Retorna os carecteres a partir da posição informada
    4. substring(arg1,arg2)              -    --- // ------ // -----
    5. substr(arg1,arg2)                 - difere no segundo argumento, esse sendo referente a quantidade de caracteres 
    6. replace(arg1,arg2)                - retorna uma nova string com base no parametro informado - não altera de fato a string
    7. toUpperCase();                    - retorna a string toda em maiúscula
    8. toLowerCase();                    - retorna a string toda em minúscula
    9. concat(arg1, arg2 ... arg6)       - pode receber vários argumentos e concatená-los
   10. trim()                            - retorna a string sem os espaços excessivos - apenas do inicio e fim
   11. charAt(arg)                       - retorna um caractere na posição informada
   12. split(arg)                        - vai dividir a String no ponto do caractere informado, retornando um array
*/
let nome = "Matheus Matsuhara";

console.log("Tamanho da string: "+nome.length); 
console.log("Posição onde 'Matsuhara' começa: ",nome.indexOf("Matsuhara")) 
//quando não encontra determinado texto ou caractere a função retorna -1.

console.log("slice: "+nome.slice(0,10)); /* recebe dois parâmetros - sendo só o primeiro obrigátorio - Pega os carecteres a partir da posição 
informada no primeiro argumento até a posição informada no segundo argumento, se apenas só o primeiro argumento for informado, retornará todos
apartir desse. */
console.log("substring: "+nome.substring(0,10)); //Funciona da mesma forma que o slice, entretando com a seguinte diferença
//O slice permite usar valor negativo para percorrer a string de trás para frente.
console.log("slice com val. negativo: "+nome.slice(-17,-9))//Abaixo vai pegar da posição -17 (inicio) até -9
console.log("slice com val. negativo2: "+nome.slice(-9)) //com apenas um argumento também

console.log("substr: "+nome.substr(8,5))/* O substr também funciona com valores negativos. E por isso, para 90% dos casos que se pretende filtrar
uma string, o substr será utilizado pois incorpora as características das outras duas funções anteriores.
*/
let nnn = nome.replace('Matsuhara','Ronielli');//Esse não altera a string especificamente, se imprimir nome, o antigo valor ainda existe
console.log(nnn);//replace retorna uma nova string com base na parametro informado, e não altera de fato a string
console.log("Antes: "+nome);
nome = nome.replace('Matsuhara','Ronielli'); //Nesse caso, substitui
console.log("Depois:", nome);//obs: console.log com virgula

let resultado = nome.toUpperCase(); 
console.log(resultado);
resultado = nome.toLowerCase(); 
console.log(resultado);

//concat é umas das formas menos usadas para concatenar devido um simples sinal de soma já resolver o problema
resultado = resultado.concat(", concatenando com o Concat"); 
console.log(resultado); 
nnn = nnn+", concatenando com o sinal de +"; //forma mais simples de concatenar
console.log(nnn);

nnn = '    Matheus Ronielli  ';
resultado = nnn.trim(); 
console.log(resultado);

resultado = "Utilizando funções do String";
console.log(resultado.charAt(5)); 
console.log("com substr:", resultado.substr(5,1)) //mesmo efeito
console.log(resultado[5]); //Apartir do Ecmascript 5    - outra forma mais simples 

nnn = "Matsuhara Kumogata Gostosão";
resultado = nnn.split(' ');//vai dividir a String no espaço em branco e retornar um array
console.log(resultado);