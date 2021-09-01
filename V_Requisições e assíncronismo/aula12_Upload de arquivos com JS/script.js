/* --------------------- #M5 aula #12: Upload de arquivos com JS ----------------------- 

    Upload de arquivos com js através de requisição interna
*/

async function enviar(){
    /* Se for apenas um arquivo - sem 'multiple' - faremos: .files[0] - Isso nos dará um objeto 'File' que é o próprio arquivo. 
    Se vários arquivos - com multiple - .files */
    let arquivo = document.getElementById('arquivo').files[0];

    //Ao visualizarmos no console teremos o 'FileList' que irá conter nossos arquivos enviados
    console.log(arquivo);

    //Para fazermos o envio de arquivos - ou dados com arquivo, o fato de ter arquivos já muda tudo - teremos que utilizar a classe 'FormData'
    let body = new FormData();
    //Aqui adicionamos os dados que queremos
    body.append('Title', 'Bla bla blá');
    body.append('arquivo', arquivo);//Se quisermos vários arquivos, podemos fazer um loop e ir adicionando-os.

    let req = await fetch('https://www.meusite.com.br/upload', {
        //Geralmente quando realizarmos upload usaremos o método POST
        method: 'POST',
        body: body,
        //Como estamos fazendo o envio de arquivos precisamos modificar também o 'Content-Type'
        headers: {
            //Do mesmo jeito que fazemos quando enviamos via formulário - temos que simular uma requisição de formulário
            'Content-Type': 'multipart/form-data'
        }
    });
    /* Dará erro porque a url passada não existe e mesmo se existisse não taria pronta para receber oque estamos passando, mas iremos mesmo 
    assim visualizar oque foi feito na prática: 
    console -> network -> upload -> headers -> 'Request Payload'
    
    '------WebKitFormBoundarytmlFfQmyumKX2W5q' é sinal de que mandamos via FormData.
    Ao visualizarmos os detalhes - os campos e os dados definidos -, com 'filename' e 'Content-Type' vemos que nosso arquivo está sendo enviado. 
    */
}
