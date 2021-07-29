/*--------------------- M4: Aula #4: Métodos de Numbers  -----------------------

    Métodos principais:

    1. toString()        - utilizado para transformar números em string - pode ser utilizado por qualquer objeto/var
    2. toFixed(arg)      - Permite retornar um número com a quantidade de casas decimais informada
    3. parseFloat(arg)   - utilizado quando se quer um valor real a partir de uma string
    4. parseInt(arg)     - utilizado quando se quer um valor inteiro a partir de uma string
*/
let n = 10;
let res = n.toString(); /* toString é um método que pode ser usado por qualquer variável, mais utilizado para transformar números em string */
console.log(res);

let m = 10.1234567;
res = m.toFixed(2);
console.log(res);

let o = '25.9';
res = parseFloat(o)+5; /* parseInt()    - alternativa para quando se quer um valor inteiro a partir de uma string */
console.log(res);