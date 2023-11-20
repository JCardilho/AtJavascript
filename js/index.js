/*Declare uma variável chamada nome e atribua a ela o seu nome. Em seguida, 
exiba o valor da variável no console.*/
var nome = "José Luiz";
console.log(nome);

/*2 - Crie uma função chamada soma que recebe dois números como parâmetros e 
retorna a soma deles.*/

function soma(num1, num2) {
  return num1 + num2;
}
console.log(soma(23, 135));

/* 3 - Declare uma variável chamada idade e atribua a ela a sua idade. Em seguida, crie
uma função chamada verificar Idade que recebe a idade como parâmetro e verifica
se a pessoa é maior de 18 anos. A função deve retornar true se a idade for maior ou
igual a 18 e false caso contrário.*/

var idade = 47;
function verificaridade(idade) {
  return idade >= 18 ? true : false;
}
console.log(verificaridade(idade));

/*  4 - Crie uma função chamada maiorNumero que recebe um array de números como
parâmetro e retorna o maior número no array.*/

function maiorNumero(array) {
  var maior = 0;
  for (var i = 0; i < array.length  ; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}
array = [121, 452, 323, 764, 45, 346, 237, 438, 569, 810];
res = maiorNumero(array);
console.log(res);

/* 5 - Declare uma variável chamada frutas e atribua a ela um array com nomes de 
frutas. Em seguida, crie uma função chamada listarFrutas que recebe o array de 
frutas como parâmetro e exibe cada fruta no console, uma de cada vez*/

var frutas = ["maçã", "banana", "laranja", "mamão", "melancia", "melão"];

function listarFrutas(frutas) {
  for (var i = 0; i < frutas.length; i++) {
    nome_fruta = frutas[i];
    console.log("fruta " +  [i + 1] +": " + nome_fruta);
  }
}
listarFrutas(frutas);


