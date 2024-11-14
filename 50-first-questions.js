// Questão 41
function Car() {
 this.make = "Lamborghini";
 //Quando você retorna uma propriedade, o valor da propriedade é igual ao valor retornado, não ao valor definido na função do construtor.
 // Retornamos a string "Maserati", então myCar.make é igual a "Maserati".
 return { make: "Maserati" };
}
const myCar = new Car();
console.log(myCar.make); // Expected: Maserati

// Questão 42
(() => {
 // é na realidade uma abreviação de: y = 10; let x = y;
 let x = (y = 10);
 // Quando definimos y igual a 10, adicionamos na verdade uma propriedade y ao objeto global (window no navegador, global no Node).
 // Em um navegador, window.y agora é igual a 10.
})(); // immediately-invoked function (IIFE)
// Então, declaramos uma variável x com o valor de y, que é 10.
// As variáveis ​​declaradas com let tem escopo definido no bloco ou seja, são definidas apenas dentro do bloco em que são declaradas.
// Quando usamos o operador typeof, o operando x não está definido: estamos tentando acessar x fora do bloco em que está declarado.
// Isso significa que x não está definido.
// Os valores que não foram atribuídos ou declarados a um valor são do tipo "undefined". console.log(typeof x) retorna "undefined".
// No entanto, criamos uma variável global y ao definir y igual a 10.
// Este valor está acessível em qualquer lugar do nosso código.
// y é definido e mantém um valor do tipo "number". console.log(typeof y) retorna "number".
console.log(typeof x); // Expected: undefined
console.log(typeof y); // Expected: number

// Questão 43
class Dog {
 constructor(name) {
  this.name = name;
 }
}
Dog.prototype.bark = function () {
 console.log(`Woof I am ${this.name}`);
};
const pet = new Dog("Mara");
pet.bark(); // Expected: "Woof I am Mara"
// Podemos excluir propriedades de objetos usando delete, também no prototype.
// Ao excluir uma propriedade no prototype, ela não está mais disponível na cadeia de prototypes.
delete Dog.prototype.bark;
// Quando tentamos invocar algo que não é uma função, um TypeError é lançado.
// Neste caso, TypeError: pet.bark is not a function, uma vez que pet.bark é undefined.
pet.bark(); // Expected: TypeError

// Questão 44
// O objeto Set é uma coleção de valores exclusivos : um valor pode ocorrer apenas uma vez.
const set = new Set([1, 1, 2, 3, 4]);
console.log(set); // Expected: { 1, 2, 3, 4 }

// Questão 45
const name = "Lydia";
// Atribui age = 21 ao objeto global
age = 21;
// Variáveis declaradas com var, const ou let não podem ser excluídas usando o operador delete.
console.log(delete name); // Expected: false
console.log(delete age); // Expected: true

// Questão 46
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers; // Desestruturação
console.log(y); // Expected: [1]

const [x, z] = numbers;
console.log(x, z); // Expected: [1, 2]

// Questão 47
const person = { name: "Lydia" };
// Quando adicionamos uma propriedade a um objeto usando o método defineProperty, ela é, por padrão, não enumerável.
// O métodoObject.keys retorna todos os nomes de uma propriedade enumerável de um objeto. Nesse caso, apenas "name".
// Propriedades adicionadas usando o método defineProperty são imutáveis por padrão.
Object.defineProperty(person, "age", { value: 21 });
// Dessa forma você torna age enumerable
// Object.defineProperty(person, "age", { value: 21, enumerable: true })

console.log(person); // Expected: { name: 'Lydia' }
console.log(person.age); // Expected: 21 Se você especifica-la, podera exibi-la. Mas, ela nao sera exibida com o método Object.keys() pois nao é enumeravel
console.log(Object.keys(person)); // Expected: [ 'name' ]

// Questão 48
let num = 10;

const increaseNumber = () => num++; // Retorna o valor e depois incrementa
const increasePassedNumber = (number) => number++; // Retorna o valor e depois incrementa

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1); // Expected: 10
console.log(num2); // Expected: 10

// Questão 49
const value = { number: 10 };

const multiply = (x = { ...value }) => {
 console.log((x.number *= 2)); // x.number = x.number * 2
};

multiply(); // Expected: 20
multiply(); // Expected: 20
multiply(value); // Expected: 20
multiply(value); // Expected: 40

// Questão 50
// index.js
// Com a palavra-chave import, todos os módulos importados são pre-parsed.
// Isso significa que os módulos importados são executados primeiro, o código no arquivo que importa o módulo é executado depois.
console.log("running index.js");
import { sum } from "./sum.js";
console.log(sum(1, 2));

// sum.js
console.log("running sum.js");
export const sum = (a, b) => a + b;

// Expected: running sum.js, running index.js, 3
// Esta é uma diferença entre require() no CommonJS e import!
// Com require(), você pode carregar dependências sob demanda enquanto o código está sendo executado.
// Se tivéssemos usado require em vez de import, running index.js, running sum.js, 3 teriam sido registrados no console.
