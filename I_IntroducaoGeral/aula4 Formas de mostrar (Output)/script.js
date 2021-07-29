/* ---------------------------- aula #4: Formas de mostrar (Output) -------------------------------
    
    formas de escrever na tela usando o document (página)

    1. document.getElementById('id').innerHTML = 'string'   - substitui o conteúdo de um elemento com dado id
    2. documente.write('string')                            - soma o conteúdo escrito ao restante do documento
    3. window.alert('string') / alert('string')             - forma de escrever na tela usando a janela -  window != document
    4. console.log('string')                                - utiliza o console
*/

document.getElementById("titulo").innerHTML="Olá, tudo bem??!";
document.write("Texto exemplo..."); /* Basicamente, forma de escrever na tela, que menos será usada. Dentro do arquivo js ele acrescenta o texto
ao resto do conteúdo html, diferentemente no console, ele substitui tudo e exibe apenas a mensagem */
//forma de escrever na tela usando a janela (janela é diferente de página, janela relaciona-se com o navegador, window != document***)
window.alert("Mensagem de exemplo!");
//ou somente o atalho
alert("Mensagem de exemplo2!");

//outra forma utiliza o console
console.log("A mensagem que eu inserir aqui, aparecerá no console."); //mensag. para o desenvolvedor
