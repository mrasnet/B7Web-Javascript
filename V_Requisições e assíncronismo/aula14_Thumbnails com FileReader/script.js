/* --------------------- #M5 aula #14: Thumbnails com FileReader ----------------------- 

    Alternativa para o 'URL.createObjectURL' para ler uma imagem e exibir ela na tela. Com isso, temos dois métodos que podemos utilizar, o 
    último é síncrono e esse é 'levemente' assíncrono.
*/

function mostrar(){
    //Iremos utilizar o 'FileReader' 
    let reader = new FileReader();
    let imagem = document.getElementById('imagem').files[0];

    //configurando o callback - 'onloadend' = 'quando o carregamento finalizar', executamos nossa função que cria a imagem e exibe na tela
    reader.onloadend = function(){
        //'reader.result' terá a url da imagem para podermos exibir 
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }

    /* Aqui executa e quando ele ler esse processo - não é instantaneo - quando ler a imagem irá executar um callback que precisamos configurar 
    antes. */
    reader.readAsDataURL(imagem);

    /* Talvez para imagem seja preferível o 'URL.createObjectURL' porque é síncrono, e assim, com ele conseguimos continuar com o código sem 
    precisar configurar nenhum tipo de callback. */
}
