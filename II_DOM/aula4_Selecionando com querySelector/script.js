/* #M2  aula #4: Selecionando com querySelector

    querySelector('')       - permite realizar a mesma coisa que o getElementsBy, entretanto, referenciando igual no CSS retorna tanto através
    do id, class, tag e etc. No caso, retornará o primeiro elemento que achar.
    querySelectorAll('')    - retorna um array com todos os elementos que possuam o parâmetro passado
*/
document.querySelector('.teste').innerHTML = "Eu gosto de comer biscoito";
document.querySelectorAll('.teste')[1].innerHTML = "Eu gosto de tomar suco";
console.log(document.querySelectorAll('.teste')); 


