/* --------------------- M3: Aula #5 e #6: Objeto ----------------------- 

    declaração:             - tipo varnome = { propri1: valor1, propri2: valor2... propri6: valor6 }

    #Assim como nos arrays, objetos em suas propriedades pode ter definido uma ou mais funções

    acesso:                 - varnome.propriedade ou varnome['propriedade'] - menos usada a última
    acessar função:         - varnome.função()
*/

let carros = [ //declaração de um array
    'Palio',
    'Uno',
    'Corolla',
    'Ferrari'
];

//declaração de um objeto
let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,
    ligar: function(){
        this.ligado = true;
        console.log("VRUM... VRUM!!!");
    },
    Acelerar: function(){
        if(this.ligado==true){
            console.log("acelerando... Iiiinnnnnnn nhewwwuuu!!!");
        }else
            console.log("Para acelerar o carro "+this.nome+", esse precisa estar ligado!")
        
    }
};

//formas de exibir 
console.log( carro['nome'] );
console.log( carro.nome ); //forma mais comum de acessar o valor de um atributo 
carro.ligar(); //chama o método ligar do objeto carro
carro.Acelerar();
console.log("Modelo: "+carro.modelo)//é possível concatenar para exibir um resultado do tipo: string+valor

//Array de objetos **********
let caarros = [
    {nome:'Fiat',modelo:'Palio'},
    {nome:'Fiat',modelo:'Uno'},
    {nome:'Toyota',modelo:'Corolla'},
    {nome:'Ferrari',modelo:'Spider'}
];
//formas de acessar
console.log(caarros);//acessa tudo
console.log(caarros[2]);//acessa o terceiro objeto do array
console.log(caarros[2].modelo); //acessa o atributo modelo do objeto na terceira posição do array, forma mais comum 
console.log(caarros[2]['modelo']);//equivalente a forma acima de acessar um atributo 