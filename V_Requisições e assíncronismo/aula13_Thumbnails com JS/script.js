/* --------------------- #M5 aula #13: Thumbnails com JS ----------------------- 

    Como gerar uma thumbnail de uma imagem - pegar a própria imagem antes mesmo de fazer o upload
    
    ou seja, temos um campo de selecionar a imagem e quando clicarmos que selecionarmos a imagem, iremos pegar imediatamente via javascript essa
    imagem e já mostrar na tela sem precisar fazer upload dela.

    Muito útil para quando precisamos visualizar a imagem antes de fazer o upload dela.
*/

function mostrar(){
    let imagem = document.getElementById('imagem').files[0];

    //Criando o elemento img - 'segunda forma', a melhor
    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;

    /* Com o nosso objeto file, iremos gerar a partir dele uma url - teremos duas opções: 
        1. Criar a imagem na atribuição - ex.: <img /> - e depois alterar essa imagem;  
        2. Ou podemos criar a tag dessa imagem, adicionar tudo e depois jogar na atribuição - o nosso caso aqui; 
    */
   //Como estamos usando um 'appendChild', vai pegar o conteúdo que já tem e ir adicionando outras se for o caso 
    document.getElementById('area').appendChild(img);
    /* Se formos nas opções de Desenvolvedor -> Elements, e visualizarmos nossa tag img, notaremos que nos foi gerado um 'blob' - pesquisar 
    depois - mas basicamente, criamos uma url visivel - visualmente apresentável no navegador - para podermos utilizar na nossa tag img - img,
    já que no caso é uma imagem. */
}
