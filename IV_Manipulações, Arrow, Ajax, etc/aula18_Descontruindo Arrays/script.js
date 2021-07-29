/*---------------------( M4: Aula #18: Desconstruindo Arrays )----------------------------------------------------
    
    let [atr1, atr2... atr7] = array            - Quando se está desconstruindo um array se deve colocar as variáveis em ordem
    let [atr1, atr2, , , atr5] = array          - Para ignorar certos valores quando se deseja que retorne algum valor específico
    let [atr1, atr2] = ['valor1', 'valor2']     - Raramente será usado: Desconstrução de array na declaração - muito usado quando se precisa 
        ter várias variáveis iniciadas no sistema 
    let [atr1, atr2, atr3] = funcao()           - É possível fazer a desconstrução através de um método que retorna uma array
*/

let info = ['Matheus Souza', 'Matheus', 'Souza', '@matsuharakumogata'];
//Como os itens do array é acessado pelo index, o nome das variáveis é de livre escolha
let [ nomeCompleto, nome, sobrenome, instagram] = info;//Se passar só um argumento vai retornar o valor da primeira posição apenas.
//quando se esta desconstruindo um array se deve colocar as variáveis em ordem
console.log(nomeCompleto, nome, sobrenome, instagram);

//Para ignorar certos valores quando se deseja que retorne algum valor específico
let [, nomee,, insta] = info;

console.log( nomee, insta);

//Raramente será usado: desconstrução de array na declaração - (também estamos inicializando uma var 'age' com valor padrão)
let [firstname, lastname, age=26] = ['Kumogata', 'Matsuhara'];

console.log(firstname, lastname, age);

//é possível fazer a desconstrução através de um método que retorna um array - para objetos também funciona
function criarArray(){
    return [1,2,3];
}

let [a, b, c] = criarArray();
console.log(a, b, c);