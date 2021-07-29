/* #M2  aula #2 #3: Selecionando Elementos (4 funções) 

    formas de selecionar elemento(s) no javascript:

    Por ordem de mais usados:
    
    1. getElementById('id_do_elemento')             - retorna o elemento com o id informado
    2. getElementsByClassName('class_nome')         - retorna um array com os elementos com a classe informada
        getElementsByClassName('class_nome')[i]     - através do indice do array é possível retornar o elemento na posição informada

    3. getElementsByTagName('nome_da_tag')          - retorna um array com os elementos da tag informada
    4. getElementsByName('name_do_input')           - retorna um array com os elementos que possuam o name informado
*/

//é possível escrever html completo em innerHTML
document.getElementById('exemplo').innerHTML = "Seja Muito Bem Vindo! <button>Clique aqui</button";
document.getElementsByClassName('teste')[0].innerHTML = "Pizza, batata frita, refrigerante, sorvete";

document.getElementsByTagName('button')[1].innerHTML = "confirmar";//o button na posição 0 é o informado na linha 14
document.getElementsByName('email')[0].placeholder = "insira seu email"
