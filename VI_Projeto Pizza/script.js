//Como estaremos utilizando o querySelector constantemente, criamos essas função para tornar o processo mais prático
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
    
    updateCart();
    closeModal();
});

Q('.menu-openner').addEventListener('click', ()=>{
    if(cart.length > 0){
        Q('aside').style.left = '0';
    }
});
Q('.menu-closer').addEventListener('click', ()=>{
        Q('aside').style.left = '100vw';
});

//CARRINHO
function updateCart(){
    Q('.menu-openner span').innerHTML = cart.length;

    if(cart.length > 0){
        Q('aside').classList.add('show');
        Q('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;

        for(let i in cart){
            let pizzaItem = pizzaJson.find((item)=> item.id == cart[i].id);
            let cartItem = Q('.models .cart--item').cloneNode(true);
            subtotal += pizzaItem.price * cart[i].qt;//'qt' é definido apenas em cart

            let pizzaSizeName;
            switch(cart[i].size){
                case 0: pizzaSizeName = 'P'; break;
                case 1: pizzaSizeName = 'M'; break;
                case 2: pizzaSizeName = 'G'; break;
            }

            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = pizzaName;

            cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;

            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{
                if(cart[i].qt > 1){
                    cart[i].qt--;
                }else{
                    cart.splice(i, 1);
                }
                
                updateCart();
            });
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{
                cart[i].qt++;
                updateCart();
            });

            Q('.cart').append(cartItem);
        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        Q('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        Q('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        Q('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;

    }else{
        Q('aside').classList.remove('show');
        Q('aside').style.left = '100vw';//para fechar o carrinho no mobile
    }
}