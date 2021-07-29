/* --------------------- M3: Aula #0: getElementById e innerHTML -----------------------

    innerHTML       - para conteúdo entre tags
    value           - para inputs, uma vez que esses não possuem conteúdo entre tag
*/
document.getElementById("titulo").innerHTML = "Mudando o h1";
//o seguinte também é possível
var sbtitulo = document.getElementById("subtitulo");
sbtitulo.innerHTML="Novo subtítulo";

/* Para mudar o conteúdo de um campo, nesse caso, como é guardado como valor a forma difere, já que num input não existe conteúdo entre a tag,
apenas valores definidos na mesma. */
var campo = document.getElementById("campo");
campo.value = "campo com texto escrito";

