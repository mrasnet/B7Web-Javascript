/*  #M2  aula #11: Manipulando Atributos
    
    setAttribute(arg1, arg2)        - permite setar um valor a um atributo
        arg1: referente ao atributo
        arg2: referente ao valor a ser atribuido ao atributo
    
    getAttribute(arg1)              - permite retornar o valor de um atributo
        arg1: referente ao atributo
*/

function trocarImagem(filename, animalname){
    document.querySelector('.imagem').setAttribute('src', 'imagens/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);
}

function pegarAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert("O animal é um "+animal);
}