/*---------------------( M4: Aula #13: Intervalos  )----------------------------------------------------

    Intervalos (timers) : permite definir um tempo em que um dado código irá rodar 

    setInterval(arg1, arg2)      - irá executar uma função a cada tantos milisegundos
    clearInterval(intervalo)     - irá limpar o intervalo 
*/

function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt;
}
//Acima foi criado um método responsável por exibir a hora atual

let timer;
let ligado = false;
/* Passamos nos argumentos o nome do método seguido do valor em milisegundos (1000mls = 1 segundo) dentro da função setInterval, que irá 
executar nossa função a cada tantos milisegundos */
function comecar(){
    if(ligado!=true){
        timer = setInterval(showTime,1000);
        ligado = true;
    }
}

function parar(){
    if(ligado==true){
        clearInterval(timer);//irá parar nosso intervalo
        ligado = false;
    }        
}