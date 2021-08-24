/* --------------------- #M5 aula #3: JSON.parse ----------------------- 

    Quando recebemos o resultado de uma requisição recebemos um JSON em string - em texto - dentro a mensagem vem na sintaxe do JSON 
    As propriedades na sintaxe do JSON em string possui aspas duplas diferentemente do que ocorre no JSON em javascript "puro", isso porque 
    para ser considerado JSON na sintaxe correta tem que possuir aspas duplas.
*/

//Uma string normal
let reqResult = '{"nome": "Naruto", "idade": 22, "caracteristicas": ["não desiste nunca", "ama lamen", "manja dos jutsus"]}';

/* O próprio navegador possui o JSON - todo maiúsculo - nele temos várias funções, e a que iremos utilizar é o 'parse'. O 'parse' é responsável 
por receber um JSON em string e transformá-lo em um JSON de fato */
let pessoa = JSON.parse(reqResult);

console.log(pessoa);
