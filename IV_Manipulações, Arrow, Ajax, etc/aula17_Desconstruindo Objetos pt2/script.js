/*---------------------( M4: Aula #17: Descontruindo Objetos pt2 )----------------------------------------------------
   
    Serve tanto para objetos como para arrays

    O processo de desconstrução é passar as valores de um objeto para variáveis locais/globais

    1. let {atr1, atr2, atr3} = objeto                           - forma mais simples de realizar a desconstrução
    2. let {atr1: var1 , atr2: var2... atr7: var7} = obj         - forma de redefinir o nome das variáveis que receberão os valores
    3. let {atr1, atr2, atr3 = 0}                                - é possível setar um valor padrão, para caso a var não esteja definida no obj

    4. let {atr} = obj.subObj                                    - recebe o atributo contido dentro de um objeto que está contido em outro
    5. let {atr1, atr2... subObj:{atr}} = obj                    - outra forma, acessando junto de demais atributos
    6. let { atr1, atr2... subObj:{subObj2:{atr1:var, atr2}} } = obj    - acessando atributo (e redefinindo - ocaso queira) de um objeto contido 
    em outro que está contido em outro
    7. let {subObj} = obj                                        - retorna o objeto diretamente
    8. function funcao({atr1, atr2...})   - realiza a desconstrução no próprio parâmetro, todos os demais conceitos podem ser aplicados na 
        desconstrução em parâmetros
*/

let pessoa = {
    nome: 'Matheus',
    sobrenome: 'Souza',
    idade: 25,
    social:{
        facebook: 'MatheusRonielli',
        instagram: 'Kumogatamatsuhara',
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};
//primeira forma, mais comum: retorna o atributo facebook do objeto 'social' e cria uma var de mesmo nome e valor
let {facebook} = pessoa.social;

console.log(facebook);

//outra forma acessando junto dos demais atributos
let {nome, sobrenome, social:{instagram}} = pessoa;

console.log(nome, sobrenome, instagram);

//complicando um pouco mais...
let hito = {
    nome: 'Matheus',
    sobrenome: 'Souza',
    idade: 25,
    social:{
        facebook: 'MatheusRonielli',
        instagram: {
            url: 'Kumogatamatsuhara',
            seguidores: 2000000
        },
    },
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

let { nome:firstName, idade:age, social:{instagram:{url:insta/* insta é a var */, seguidores}} } = hito;

console.log(firstName, age, insta, seguidores);//não foi preciso renomear a var 'seguidores' pq ela ainda não existia

//redefinindo a var de ref. do objeto 'instagram' junto de outros atributos
let {nome: nomee, social:{instagram:instaa}} = hito;
console.log(nomee, instaa);

//o mesmo conceito em funções
function pegarNomeCompleto(obj){//aqui receberia um objeto 
    let nom = obj.nome;
    let sob = obj.sobrenome;

    return `${nom} ${sob}`;
}
//Aqui já realiza a desconstrução no próprio parâmetro, todos os demais conceitos podem ser aplicados na desconstrução em parâmetros
function pegarNomeCompleto2({nome:namae, sobrenome: myouji}){
    return `${namae} ${myouji}`;
}
console.log(pegarNomeCompleto2(pessoa));