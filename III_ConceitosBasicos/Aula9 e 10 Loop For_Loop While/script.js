/* --------------------- M3: Aula #9 e #10: Loop For e Loop While 

    while / for / foreach - for(tipo var in arraynome)
*/
let texto = ' ';
let texto2 = ' ';
let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla'];
let html = '<ul>';

//while
let c = 1;
while(c<=10){
    texto+= "Número: " + c + '<br/>';
    c++;
} 

//For
for(let i=1; i<=50; i++){
    texto2+= 'Número: ' + i + '<br/>';
}
//Foreach  - for loop array
for(let i in carros){
    console.log(i);//i é a posição retornada e não o objeto
    html +='<li>'+carros[i]+'</li>';
}
html+='</ul>';

document.getElementById("demo").innerHTML = html;