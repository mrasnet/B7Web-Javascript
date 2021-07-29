/*---------------------( M4: Aula #9 a 11: Datas  )------------------------------------------------------

    1. toDateString()       - retorna a data 
    2. toUTCString()        - retorna com a hora sem fuso-horário (europa GMT)
    3. toString()           - retorna com a hora com fuso horário, equivale a imprimir somente o objeto date
    4. getFullYear()        - retorna o ano da data
    5. getMonth()           - retorna o mês da data     - lembrar que os meses em js começam do ZERO, no caso o mês a ser considerado é mês+1
    6. getDay()             - retorna o dia da semana   - dias da semana vão de 0 a 6 no js, começando do domingo
    7. getDate()            - retorna o dia do mês
    8. getHours()           - retorna a hora
    9. getMinutes()         - retorna os minutos
   10. getSeconds()         - retorna os segundos
   11. getMilliseconds()    - retorna os milisegundos
   12. getTime()            - retorna a quantidade de milisegundos passados desde 1970
   13. Date.now()           - retorna o horário atual em milisegundos sem precisar de objeto do tipo Date
   14. setFullYear(arg)     - define o ano  - permite também definir dia e mês, entretanto por convenção definimos só o ano
   15. setMonth(arg)        - define o mês 
   16. setDate(arg)         - define o dia do mês
   17. setHours(arg)        - define as horas
   .... etc.                - mesma lógica para os demais
*/


let d = new Date(); //Cria um objeto Date com as informações da data atual do dispositivo
console.log(d); //retorna informações de data
console.log("Date no toDateString: ",d.toDateString()); 
console.log("Date no toUTCString: ",d.toUTCString());
console.log("Date no toString: ",d.toString());

/* É possível criar um objeto do tipo data com as informações que queremos. arg1 = ano, arg2 = mês (começa do ZERO), arg3 = dia (não começa do 
zero), arg4, arg5, arg6 = H/M/S     - é possível definir também os milésimos, porém desnecesário */
let data = new Date(2020, 0, 1, 12, 30, 12);
console.log(data.toString()); //O fuso-horário é com base no dispositivo

/* É possível criar também através de uma string no seguinte formato */
let data2 = new Date('2020-01-01 15:42:17');
console.log(data2.toString());

/* O minímo para gerar uma data é utilizar o ano e o mês */
let data3 = new Date(2022,2);
console.log(data3.toString());

/* No javascript as datas começam a contar os milisegundos a partir de 01/01/1970 */
let data4 = new Date(0); //com o arg ZERO é possível verificar
console.log(data4.toUTCString()); 
//É possível passar os milisegundos e a função converte na data - valores negativos para datas abaixo de 01/01/1970
data4 = new Date(12314413424);
console.log(data4.toUTCString()); 

/**-------------------------------------- Datas (2/3)--------------- */
console.log("---------------------------- Datas (2/3)---------------")
let dataa = new Date();

let retorno = dataa.getFullYear();
console.log("Retorna ano: ",retorno);
retorno = dataa.getMonth();
console.log("Retorna mês: ",retorno);
retorno = dataa.getDay();
console.log("Retorna o dia da semana: ",retorno);
retorno = dataa.getDate();
console.log("Retorna o dia do mês: ",retorno);

retorno = dataa.getHours();
console.log("Retorna a hora: ",retorno);
retorno = dataa.getMinutes();
console.log("Retorna os minutos: ",retorno);
retorno = dataa.getSeconds();
console.log("Retorna os segundos: ",retorno);
retorno = dataa.getMilliseconds();
console.log("Retorna os milisegundos: ",retorno);
retorno = dataa.getTime();
console.log("Retorna os milisegundos passados desde 1970: ",retorno);

retorno = Date.now(); //retorna o horário atual em milisegundos sem precisa de objeto do tipo Date
console.log("Retorna o horário atual em milisegundos: ",retorno);

/**-------------------------------------- Datas (3/3) --------------- */
console.log("---------------------------- Datas (3/3) ---------------");
let daata = new Date();
//Permite também definir dia e mês, entretanto por convenção definimos só o ano
daata.setFullYear(2022);
retorno = daata;
console.log(retorno);

//define o mês 
daata.setMonth(11);
retorno = daata;
console.log(retorno);

//Para definir os demais a lógica é a mesma, entretanto, um recurso interessante a seguir para quando se quer saber o dia de um prazo:
daata.setDate(daata.getDate()+7);//Com o método getDate retornamos o dia do mês e podemos somá-lo com um valor inteiro e definir com o setDate
retorno = daata;
console.log("O Dia do mês: ",retorno.getDate(),", o dia da semana: ",retorno.getDay());

//A mesma lógica se aplica a horas e demais elementos
daata.setHours(daata.getHours()+7);
retorno = daata;
console.log("A hora atual mais 7 horas: ",retorno);
//Se precisar voltar a hora
daata.setHours(daata.getHours()-7);
retorno = daata;
console.log("A hora atual menos 7 horas: ",retorno);