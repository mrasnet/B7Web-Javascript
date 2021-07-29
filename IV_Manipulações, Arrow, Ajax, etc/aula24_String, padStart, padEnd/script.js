/*---------------------( M4: Aula #24: String, padStart, padEnd  )------------------------------------------------------------
   
    Funções para manipulação de String:

    padEnd      - permite definir um tamanho mínimo para uma string, preenchendo essa com um ou mais caracteres ao FINAL.
    padStart    - permite definir um tamanho mínimo para uma string, preenchendo essa com um ou mais caracteres no COMEÇO.
*/
let telefone = '54';

console.log( telefone.padEnd(9,'*')); //arg1: tamanho min / arg2: char(s) que deseja usar para preencher  - ou string
console.log( telefone.padStart(9,'*'));

/* Exemplo de aplicação - Quando temos uma aplicação que precisa mostrar o número do cartão ao cliente mas sem mostrar esse - por questões de 
segurança */
let cartao = '1234123412341234';

let lastDigits = cartao.slice(-4);
let cartaoMascarado = lastDigits.padStart(16,'*');
console.log('Este é o seu cartão? '+cartaoMascarado);