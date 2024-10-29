// Questão 11
function Person(firstName, lastName) {
 this.firstName = firstName;
 this.lastName = lastName;
}

const member = new Person("Marilia", "Garcia");
Person.getFullName = function () {
 // Para funcionar corretamente, o método deve ser adicionado ao protótipo da função:
 // Person.prototype.getFullName...
 return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName()); // Expected: TypeError, pois getFullName não é um método de instância.

// Questão 12
const lydia = new Person("Marilia", "Garcia"); // Chama a função como construtor.
const sarah = Person("Sarah", "Smith"); // Chama a função sem 'new', this refere-se ao objeto global.

console.log(lydia); // Objeto válido.
console.log(sarah); // Undefined, pois não foi criado como objeto.

// Questão 13
// JavaScript é dinamicamente tipado: variáveis podem mudar de tipo automaticamente.
// A coerção de tipo ocorre ao combinar tipos, como 'Number + String = String'.
function sum(a, b) {
 return a + b;
}

console.log(sum(1, "2")); // Expected: "12" (coerção para string)

// Questão 14
let number = 0;
console.log(number++); // Expected: 0 (retorna o valor antes de incrementar)
console.log(++number); // Expected: 2 (incrementa antes de retornar)
console.log(number); // Expected: 2 (valor final)

// Questão 15
function getPersonInfo(one, two, three) {
 console.log(one);
 console.log(two);
 console.log(three);
}

const person = "Marilia";
const age = 27;

// getPersonInfo`${person} is ${age} years old`; // Template literals.

// Questão 16
function checkAge(data) {
 if (data === { age: 18 }) {
  // Sempre será falso pois objetos são comparados por referência.
  console.log("You are an adult!");
 } else if (data == { age: 18 }) {
  // Também será falso pela mesma razão.
  console.log("You are still an adult.");
 } else {
  console.log(`Hmm.. You don't have an age I guess`);
 }
}

// checkAge({ age: 18 }); // Expected: "Hmm.. You don't have an age I guess"

// Questão 17
function getAge(...args) {
 // O operador spread transforma argumentos em um array (que é um objeto).
 console.log(typeof args);
}

// getAge(21); // Expected: "object"

// Questão 18
function getAge() {
 // "use strict" impede criação acidental de variáveis globais.
 // Sem "use strict", age seria adicionada ao objeto global.
 "use strict";
 age = 21; // Não declarado, então ReferenceError.
 console.log(age);
}

// getAge(); // Expected: ReferenceError

// Questão 19
const sum = eval("10*10+5"); // eval executa o código como string.
console.log(sum); // Expected: 105 (number)

// Questão 20
// Com var, múltiplas declarações com o mesmo nome são permitidas no mesmo escopo.
var num = 8;
var num = 10; // Sobrescreve a primeira declaração.

console.log(num); // Expected: 10

// Questão 21
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

// Em objetos, chaves numéricas são tratadas como strings internamente.
console.log(obj.hasOwnProperty("1")); // Expected: true
console.log(obj.hasOwnProperty(1)); // Expected: true

// Em Sets, o valor deve ter o tipo correto para ser encontrado.
console.log(set.has("1")); // Expected: false (string não encontrada)
console.log(set.has(1)); // Expected: true (encontra o número 1)

// Questão 22
const obj1 = { a: "one", b: "two", a: "three" };
// Se temos duas chaves com o mesmo nome, a última irá substituir a primeira.
// Ainda vai estar na primeira posição, mas com o último valor específicado.
console.log(obj); // Expected: { a: 'three', b: 'two' }
