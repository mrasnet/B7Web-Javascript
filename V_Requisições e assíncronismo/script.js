/* --------------------- Aula #8: Variáveis(2/2) ----------------------- 

        var          - permite utilizar de forma global
        let          - limitado a uma determinada area (bloco) e não pode ser redeclarada (o var permite)
        const        - variável de valor constante (Não exatamente uma constante), não pode receber um novo valor

        #dica: No caso, evitar usar var. Usar let para variáveis locais, e const para valores constantes.
*/

var nome="MathRoni"; 
let nomee="MathRoni"; 
const noome="MathRoni"; 

const nnome = {nome:'Matheus',sobrenome:'Souza'}; //declaração de um objeto. const é muito útil principalmente quando se usa arrays e objetos
nnome.nome = 'Theus'; //única forma que permite realizar alteração numa constante
console.log(nnome); 


