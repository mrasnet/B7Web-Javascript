/*  #M2  aula #13 e #14: Distâncias e Scroll Suave / Resposta do Exercício Scroll

   
    document    :       para referir-se ao scrollbar de um elemento 
        scrollTop       - retorna a posição do scrollbar vertical
        scrollLeft      - retorna a posição do scrollbar horizontal (caso exista)

    window      :       para referir-se ao scrollbar da página
        scrollY         - retorna a posição do scrollbar vertical
        scrollX         - retorna a posição do scrollbar horizontal (caso exista)
    
    document / window
        scrollTo(x,y)   - permite rolar o scrollbar para a posição informada
*/

function subirTela(){
    /* window.scrollTo(0,0);  - aqui rola a barra de forma padrão - rápida */
    
    window.scrollTo({ /* Aqui utilizamos um objeto para passar as propriedades */
        top: 0,
        /* left: 0,         - poderiamos passar também a posição do scrollbar horizontal caso esse existisse */
        behavior: 'smooth' //'smooth'   - irá deslizar suavemente a barra de rolagem    - Padrão: auto
    })
}

function decidirBotaoScroll(){
    if(window.scrollY == 0){
        //oculta o botão
        document.querySelector('.scrollbutton').style.display = 'none';
    }else{
        //mostra o botão
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}
//setInterval serve o propósito, entretanto não é a melhor escolha uma vez que esse vai ter que ficar sendo executado a cada 1sg (1000 = 1sg)
//setInterval(decidirBotaoScroll, 1000);

//usar o addEventListener é a melhor escolha pois só executa quando a scrollbar é movida
window.addEventListener('scroll', decidirBotaoScroll); 