//Como estaremos utilizando o querySelector constantemente, criamos essa função para tornar o processo mais prático
const Q = (el) => document.querySelector(el);
const QALL = (el) => document.querySelectorAll(el);
let modalQtdItem = 1;
let cart = [];
let modalKey = 0;

//LISTAGEM DAS PIZZAS
pizzaJson.map((item, index)=>{
    //cloneNode para clonar o item e tudo dentro dele - não pegamos o original 
   let pizzaItem = Q('.models .pizza-item').cloneNode(true);

   pizzaItem.setAttribute('data-key', index);
   pizzaItem.querySelector('.pizza-item--img img').src = item.img;
   pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
   pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
   pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

   //Quando abre o modal
   pizzaItem.querySelector('a').addEventListener('click', (e)=>{
    //"Evita a ação padrão - de redirecionar a um link"   
        e.preventDefault();
        //'e.target' faz referencia ao próprio elemento, 'closest' para o '.pizza-item' mais próximo, seja dentro ou fora
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQtdItem = 1;
        modalKey = key;

        Q('.pizzaBig img').src = pizzaJson[key].img;
        Q('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        Q('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        Q('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        //retira o item selecionado anteriormente sempre que abrir o modal
        Q('.pizzaInfo--size.selected').classList.remove('selected');
        QALL('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2){//pré-configura como item selecionado sempre a pizza grande
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        Q('.pizzaInfo--qt').innerHTML = modalQtdItem;

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

//AÇÕES DO MODAL
function closeModal(){
    Q('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        Q('.pizzaWindowArea').style.display = 'none';
    }, 500);   
}

QALL('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});

Q('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQtdItem > 1){
        modalQtdItem--;
        Q('.pizzaInfo--qt').innerHTML = modalQtdItem;
    }
});
Q('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalQtdItem++;
    Q('.pizzaInfo--qt').innerHTML = modalQtdItem;
});

QALL('.pizzaInfo--size').forEach((size)=>{
    size.addEventListener('click', ()=>{
        //Sempre que trabalhamos com seleção temos que remover os itens anteriormente selecionados para reselecionar
        Q('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});

Q('.pizzaInfo--addButton').addEventListener('click', ()=>{
    let size = parseInt(Q('.pizzaInfo--size.selected').getAttribute('data-key'));
    let indentifier = pizzaJson[modalKey].id+'@'+size;
    
    let checkedIdentifier = cart.findIndex((item)=>item.indentifier == indentifier);
    
    if(checkedIdentifier > -1){
        cart[checkedIdentifier].qt += modalQtdItem;        
    }else{
        cart.push({
            indentifier,
            id: pizzaJson[modalKey].id,
            size,   //como atributo e valor - nome da variável aqui - são iguais, podemos escrever dessa forma
            qt: modalQtdItem
        });
    }
    
    closeModal();
});

