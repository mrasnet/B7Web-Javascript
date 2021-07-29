/*---------------------( M4: Aula #16: Descontruindo Objetos )----------------------------------------------------
    
    Serve tanto para objetos como para arrays

    O processo de desconstrução é passar os valores de um objeto para variáveis locais/globais

    1. let {atr1, atr2, atr3} = objeto                           - forma mais simples de realizar a desconstrução
    2. let {atr1: var1 , atr2: var2... atr7: var7} = obj         - forma de redefinir o nome das variáveis que receberão os valores
    3. let {atr1, atr2, atr3 = 0}                                - é possível setar um valor padrão, para caso a var não esteja definida no obj
*/

let pessoa = {
    nome: 'Matheus',
    sobrenome: 'Souza',
    idade: 25,
    social:{
        facebook: 'MatheusRonielli',
        Instagram: 'matsuharakumogata',
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

console.log(pessoa.nomeCompleto());

/* o seguinte processo será automatizado:

let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;

console.log(nome, sobrenome, idade);
*/

//É possível fazer o processo de desconstrução da seguinte forma:
let {nome, sobrenome, idade} = pessoa;

console.log(nome, sobrenome, idade);

//É possível também definir o nome da variável que vai receber o valor da seguinte forma
let {nome:nomePessoa , sobrenome: sobrenomePessoa, idade: idadePessoa} = pessoa; //não é obrigatório redefinir todos 

console.log(nomePessoa , sobrenomePessoa, idadePessoa);

let pessoa2 = {
    nome: 'Naruto',
    sobrenome: 'Uzumaki',
    social:{
        facebook: 'uzumakiNarutofacebook',
        Instagram: 'uzumakiNarutoInsta',
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

/* Caso estejamos tentando acessar uma variável que existe a possibilidade de não ter sido definida, é possível definir um valor padrão, esse
só será aplicado, caso a variável não tiver sido definida */
let {nome:nomePessoa2 , sobrenome:sobrenomePessoa2, idade:idadePessoa2 = 0} = pessoa2;

console.log(nomePessoa2 , sobrenomePessoa2, idadePessoa2);