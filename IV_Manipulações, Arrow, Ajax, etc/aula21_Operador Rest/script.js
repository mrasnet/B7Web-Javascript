/*---------------------( M4: Aula #21: Operador Rest )------------------------------------------------------------
    
    Em contraste ao operador spread, o operador Rest é bem menos utilizado.
    É utilizado quando não se sabe a quantidade exata de argumentos passados para um método

    * igual ao spread, permite receber n argumentos e transforma-los num array
*/

function adicionar(...nomes){
    console.log(nomes);
}

adicionar("Goku", "Ichigo", "Naruto", "Kakashi");

//Aqui estamos utilizando o operdor rest com o spread
function add(nomes, ...novosNomes){//operador rest
//Se não colocar o ..., tariamos criando um array de arrays
    let novoConjunto = [
        ...nomes, //operador spread
        ...novosNomes //operador spread
    ];
    return novoConjunto;
}

let nomes = ["Hinata", "Sakura"];
let outros = add(nomes, "Ino", "Temari", "Tsunade");
console.log(outros);