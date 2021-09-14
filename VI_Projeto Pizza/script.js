//Como estaremos utilizando o querySelector constantemente, criamos essa função para tornar o processo mais prático
const Q = (el) => document.querySelector(el);
const QALL = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index)=>{
    //cloneNode para clonar o item e tudo dentro dele - não pegamos o original 
   let pizzaItem = Q('.models .pizza-item').cloneNode(true);

   pizzaItem.setAttribute('data-key', index);
   pizzaItem.querySelector('.pizza-item--img img').src = item.img;
   pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
   pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
   pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
   pizzaItem.querySelector('a').addEventListener('click', (e)=>{
    //"Previna a ação padrão - de redirecionar a um link"   
    e.preventDefault();
    //'e.target' faz referencia ao próprio elemento, 'closest' para o '.pizza-item' mais próximo, seja dentro ou fora
    let key = e.target.closest('.pizza-item').getAttribute('data-key');


    Q('.pizzaBig img').src = pizzaJson[key].img;
    Q('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
    Q('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;

    //O opacity é uma propriedade do CSS que junto do Transition definido no CSS, e do processo feito aqui, abrirá o modal de maneira suave 
    Q('.pizzaWindowArea').style.opacity = 0; //vai de 0 à 1 - 0% à 100%
    Q('.pizzaWindowArea').style.display = "flex";
    //É necessário definir o setTimeout porque seria impossível definir opacidade 0 já definindo como 1 em seguida - não perceberia o efeito
    setTimeout(()=>{
        Q('.pizzaWindowArea').style.opacity = 1;
    }, 200);
   });

   Q('.pizza-area').append(pizzaItem);
});