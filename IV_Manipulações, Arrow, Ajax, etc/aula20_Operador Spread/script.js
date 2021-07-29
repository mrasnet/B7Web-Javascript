/*---------------------( M4: Aula #20: Operador Spread )------------------------------------------------------------
    
    Será utilizado bastate, principalmente quando começar a utilizar os frameworks - funciona para arrays e objetos
    Permite declarar um novo array/objeto aproveitando os valores de outro
*/

let numeros = [1,2,3,4];
//permite declarar um novo array aproveitando os valores de outro
let numbers = [...numeros, 5,6,7,8];

console.log(numbers);

//será mais utilizado com objetos - utilização com objetos:
let info = {
    nome: 'Matheus',
    sobrenome: 'Souza',
    idade: 25
}

let novaInfo = {
    ...info,
    cidade: 'Angicos',
    estado: 'RN',
    pais: 'Brasil'
};

console.log(novaInfo);

//utilização em função - a utilização na prática será algo muito próximo do código a seguir: 
function adicionarInfor(info){ //quando precisar receber algumas informações e adicionar informações adicionais
    
    let novasInfor = {
        ...info,
        status:0,
        token: 'asdfaksjl',
        data_cadastro: '18/11/2020'
    }
    return novasInfor;
}
console.log(adicionarInfor({nome: 'Naruto', sobrenome: 'Uzumaki'}));




