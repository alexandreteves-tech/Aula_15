// let equipes = ["Ferrari", "Mercedes", "Red_bull", "Mclaren"]

// console.log(equipes);

// equipes.push("Audi");

// console.log(equipes[4]);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < num.length; i++) {
 //    console.log(num[i]);
// }
//--------------------------------------------------------------------------------------------------------
// const numeros = [2,8,9,6,3,7];

// laço de repetição mais usado é o FOR para percorret array.

// for(index = 0; index < numeros.length;index = index++) {
//    console.log(numeros[index])
// }


//---------------------------------------------------------------------------------------------------------

// const numerosDobrados = [];

// for(index = 0; index < numeros.length; index++) {
//     numerosDobrados.push(numeros[index] *2)
// }

// console.log(numerosDobrados)

//forma direta

// for(numero of numeros) {
//     numerosDobrados.push(`R$ ${numero},00`)
// }
//---------------------------------------------------------------------------------------------------------

// const numerosPares = []
// for (numeros of numeros) 
 //    if (numero % 2 == 0) {
  //       numerosPares.push(numero)
// } 

//---------------------------------------------------------------------------------------------------------


// for (numero of numeros) {
//     if(numero >4) {
//        numerosMaior.push(numero)
 //        break
  //   }
// }

//---------------------------------------------------------------------------------------------------------

// let soma = 0
// for(numero of numeros) {
  //   soma += numero
// }

// console.log(soma)

//--------------------------------------------------------------------------------------------------------

//  const pessoas = [
 //   {nome: "Robson", idade: 18},
 //   {nome: "alexandre", idade: 47},
 //   {nome: "pedro", idade: 24},
//]
  //  for (pessoa of pessoas){
 //       const {nome, idade} = pessoa
 //       console.log(`${nome} tem ${idade} anos.`)


 //   }


    // *Desconstrução avançada de objetos

 //   const {nome, idade} = pessoa

//-----------------------------------------------------------------------------------------------------------

// POO - CLASSES (MOLDE DE OBJETOS)

//class Pessoa {
 //   constructor (nome, idade) {
 //       this.nome = nome
 //       this.idade = idade    // o This vai chamar o elemento Pessoa poderia ser escrito pessoa.nome
  //  }
 // permissões (criar metodo)
 ////       falar() {
 //       return 'ola '
 //    }
 //   }
    
  //  const joao = new Pessoa ("joao", 56)
  //  console.log (joao)

  //  console.log(joao.falar() + "Bem Vindo")

// -----------------------------------------------------------------------------------------------------------------

// FUNÇOES
// CONJUNTO DE INSTRUÇÕES QUE POSSO USAR QUANDO PRECISAR
// funcoes nativas já estaõ no sistema, as complementares as gente cria com function

// function falarOla (nome="cliente", idade){
 //    console.log(`Ola, ${nome},tem ${idade}`)
// } // sempre com verbo no infonitivo, indcando uma ação
// falarOla()


// funções complementares de rotina e de retorno (o retorno finaliza o retorno, ele é como o break das funç~oes pois finaliza o codigo)
// o return finaliza o código.

// funções anonimas
// uma funcao que nao tem um nome escreve só (function ())
// nao sao funcoes que chamamos para mostrar alguma coisa, ela é chamada de callback, pois sao usadas para serem usadas por outras funcoes
// 


// podemos colocar uma função anonima dentro de uma variavel (proteger a funcao dentro de uma variável)

// maneira reduzida das funções anonimas
// -- assim nasceu a Arrow function (função de seta) funciotn (){} foi substituido por const falar =  () => { "bloco de execução"}
// estude funcao de setas!!!!!




//------------------------------------------------------------------------------------------------------------------

// MÉTODOS AVANÇADOS DE ARRAY
// forEach


// filtragem avançada

//acumulador avançado




//iterar = percorrer um array, ou seja, acessar cada elemento do array
// https://dontpad.com/fs40js05