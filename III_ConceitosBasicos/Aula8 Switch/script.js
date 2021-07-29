/* --------------------- M3: Aula #8: Switch -----------------------

    Quando temos várias condições para uma mesma var, usamos o switch
*/
let dia = 6;
let diaNome = ' ';

switch(dia){
    case 6: 
    case 7: diaNome = 'final de semana'; 
        break;
    default: diaNome = 'dia de semana';
}

document.getElementById("dia").innerHTML = "Hoje é "+diaNome;