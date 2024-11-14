// Exercício 1: Acessando uma variável fora de uma função
// Questão: Qual será o valor exibido no console?
let x = 10;

function testScope() {
 console.log(x);
}

testScope(); // Expected: 10

// Exercício 2: Definindo uma variável dentro de uma função
// Questão: O que será exibido no console?
let z = 10;

function testScopeZ() {
 let z = 20;
 console.log(z);
}

testScopeZ(); // Expected: 20

// Exercício 3: Escopo de variáveis dentro de blocos
// Questão: Qual será o valor de x após a execução do código?
if (true) {
 var y = 5; // var é function-scoped, ou seja, é acessivel globalmente.
}
console.log(y); // Expected: 5

// Exercício 4: Usando let dentro de um bloco condicional
// Questão: O que será exibido no console?
if (true) {
 let y = 10; // let é block-scoped, ou seja, é acessivel apenas no bloco em que foi declarada
}
console.log(y); // Expected: ReferenceError

// Exercício 5: Funções aninhadas e escopo léxico
// Questão: O que será exibido no console?
function outerFunction() {
 let a = 10;

 function innerFunction() {
  console.log(a); // tem acesso à let a pois esta no mesmo escopo que ela
 }

 innerFunction();
}

outerFunction(); // Expected: 10

// Exercício 6: Closures
// Questão: Qual será o resultado exibido?
function outerFunction() {
 let counter = 0;

 return function innerFunction() {
  counter++;
  console.log(counter);
 };
}

const increment = outerFunction();
increment(); // Expected: 1
increment(); // Expected: 2

// Exercício 7: Escopo de variáveis em loops
// Questão: Qual será o valor exibido?
for (var i = 0; i < 3; i++) {
 // setTimeOut agenda a execuçao de algo para depois do tempo determinado.
 // Aqui, temos 3 agendamentos
 setTimeout(() => console.log(i), 1000); // Expected: 3 3 3
}

// Exercício 8: Usando let em um loop com setTimeout
// Questão: Qual será o valor exibido?
for (let i = 0; i < 3; i++) {
 // let tem escopo de bloco, portanto, cada iteraçao tera uma instância de i.
 // ele lembra-ra do valor de i quando o loop foi executado
 setTimeout(() => console.log(i), 1000); // Expected: 0 2 1
}

// Exercício 9: Escopo de variáveis dentro de funções autoexecutáveis
// Questão: Qual será o resultado exibido?
(function () {
 var x = 10;
 console.log(x); // Expected: 10
})(); // immediately-invoked function (IIFE)

console.log(x); // Expected: ReferenceError. var é function-scoped

// Exercício 10: Função dentro de um loop
// Questão: O que será exibido?
function testScope() {
 for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
 }
}

testScope(); // Expected: 3 3 3
