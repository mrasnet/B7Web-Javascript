/* --------------------- #M5 aula #5: Código síncrono vs assíncrono ----------------------- 

    É importante quando tratamos de requisições entendermos a diferença entre código síncrono e assíncrono - para sabermos quando estamos 
    executando um ou outro.

    código síncrono     - executado linha a linha, só passa para a linha seguinte quando a anterior termina sua execução.
    código assíncrono   - executado linha a linha, passa para a linha seguinte mesmo que ainda não tenha terminado a execução completa de sua
    instrução. Não precisamos aguardar para continuar com o sistema - uma vez que ele retornar ae podemos fazer alguma coisa com o retorno.

    Entender isso nos possibilita entendermos que requisições internas são requisições assíncronas - ex.: barra de busca do Google
*/

//ex.: Código SÍNCRONO
let nome = 'Matheus';
let sobrenome = 'Souza';
let completo = nome+' '+sobrenome;

//ex.: Código ASSÍNCRONO
let nome = 'Matheus';
let sobrenome = 'Souza';
let temperatura = Maquininha.pegarTemperatura(); //ASSÍNCRONO
let completo = nome+' '+sobrenome;