/*---------------------( M4: Aula #12: Matemática  )----------------------------------------------------
    
    No Javascript há uma classe responsável por realizar operações matemáticas:

    1. Math.PI                                   - constante de PI
    2. Math.round(arg)                           - arredonda dependendo do valor passado
    2. Math.floor(arg)                           - Arredonda para baixo
    3. Math.ceil(arg)                            - Arredonda para cima - req. parte decimal sendo maior que zero
    4. Math.abs(arg)                             - Obter valor absoluto - sem sinal negativo 
    5. Math.min(arg1... arg5)                    - retorna o menor de n argumentos 
    6. Math.max(arg1... arg5)                    - retorna o maior de n argumentos
    7. Math.random()                             - retorna um número aleatório entre 0 e 1 - geralmente é utilizado junto de outros metódos
    8. Math.floor( Math.random()* numero );      - expressão que retorna um número aleatório com base no número** que definirmos

    * Há também metódos que retornam seno, conseno, tangente etc. Caso surja a necessidade de utilização, pesquisar na internet
*/
 
let valor = Math.PI;
console.log("Constante de PI: ",valor);

valor = Math.round(3.53);//Dependendo do número, arredonda para cima ou para baixo - apartir do 5 (primeiro decimal) arredonda para cima
console.log("Realiza arredondamento: ",valor);

valor = Math.floor(3.99);
console.log("Realiza arredondamento p/baixo: ",valor);
valor = Math.ceil(3.1);//Arredonda para cima - req. parte decimal sendo maior que zero
console.log("Realiza arredondamento p/cima: ",valor);

valor = Math.abs(-9.65464);//Obter valor absoluto - sem sinal negativo 
console.log("Valor absoluto: ",valor);

valor = Math.min(7, 100, 600, 20, 3);
console.log("O menor de n argumentos: ",valor);
valor = Math.max(7, 100, 600, 20, 3);
console.log("O maior de n argumentos: ",valor);

valor = Math.random();
console.log("Número aleatório entre 0 e 1: ",valor);
/* multiplica pelo o número máximo que queremos, e depois arredonda para baixo para garantir que o número aleatório gerado nunca é maior que o 
máximo definido */
valor = Math.floor( Math.random()*100 );//Caso 100 ficar de fora do intervalo e queiramos ele, é só considerar 101 como máximo 
console.log("Número aleatório: ",valor);