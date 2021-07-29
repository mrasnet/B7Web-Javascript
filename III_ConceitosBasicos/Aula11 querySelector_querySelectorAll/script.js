/* --------------------- M3: Aula #11: querySelector (querySelectorAll)  ----------------------- 

    querySelector             - seleciona sempre o primeiro item que achar com o id, class, name ou tag especificado
    querySelectorAll          - retorna um array com todos os elementos com o id, class, name ou tag especificado
*/
let nome = document.querySelector("ol.lista"); //permite selecionar um elemento referenciando igual no css - não pode dar espaço (parece...)
console.log(nome);
document.querySelector("#titulo").innerHTML = 'Mudando o titulo'//também para IDs

let lista = document.querySelectorAll("li");
for(let i in lista){
    lista[i].style.color = '#FF0000';
}