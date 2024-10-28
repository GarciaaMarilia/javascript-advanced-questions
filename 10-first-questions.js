// "use strict"; // Questao 9: O modo estrito ("use strict") força uma verificação mais rigorosa no JavaScript, exigindo que todas as variáveis sejam declaradas antes de seu uso. Caso "use strict" estivesse ativado, uma referência incorreta a greetign resultaria em um ReferenceError 

// Questao 1
function sayHi() {
 console.log(name);
 console.log(age);
 var name = "Marilia"; // Les variables avec le mot clé "var" sont levées et initialisées.
 const age = 27; // Les variables avec les mots clés "const" et "let" sont levées mais ne sont pas initialisées.
}

sayHi(); // Expected: undefined and ReferenceError

// Questao 2
for (var i = 0; i < 3; i++) {
 setTimeout(() => console.log(i), 1); // Expected: 3 3 3.
}

for (let i = 0; i < 3; i++) {
 setTimeout(() => console.log(i), 1); // Expected: 0, 1, 2
}

// Questao 3
const shape = {
 radius: 10,
 diameter() {
  // Funçao normal
  return this.radius * 2;
 },
 // Arrow function.
 perimeter: () => 2 * Math.PI * this.radius, // Com arrow functions, a palavra-chave this faz referência ao escopo atual em que está inserida, diferente de funções normais! Isso significa que quando nós chamamos perimeter, ela não faz referência ao objeto shape, mas ao seu escopo atual (por exemplo, window).
};

console.log(shape.diameter()); // Expected: 20
console.log(shape.perimeter()); // Expected: NaN


// Questao 4
// Pagina 61 de JavaScript: O guia definitivo

// Operador unitario + tenta converter um valor para um numero
console.log(+true); // Expected: 1
// // Operador unitario ! inverte um valor booleano
console.log(!"Lydia"); // Expected: false


// Questao 5
const bird = {
 size: "small",
};

const mouse = {
 name: "Mickey",
 small: true,
};

console.log(mouse.bird.size); // Expected: Cannot read properties of undefined (reading 'size')
console.log(mouse[bird.size]); // Expected: true
console.log(mouse[bird["size"]]); // Expected: true


// Questao 6
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting); // Expected: Hello


// Questao 7
let a = 3;
let b = new Number(3); // new Number() é uma funcção construtura padrão do JavaScript. Ainda que parece com um número, não é realmente um número: Tem um monte de funções extras e é um objeto.
let c = 3;

console.log(a == b); // Expected: true
console.log(a === b); // Expected: false
console.log(b === c); // Expected: false
console.log(typeof b, b, typeof a, a)


// Questao 8
class Chameleon {
 static colorChange(newColor) { // A função colorChange é estática. Métodos estáticos são designados para viver somente nos construtores em que são criados, e filhos não herdam esses métodos. Já que freddie é filho de Chameleon, a função não é herdada, e não está disponível para freddie: Um erro TypeError é gerado.
  this.newColor = newColor;
  return this.newColor;
 }

 constructor({ newColor = "green" } = {}) {
  this.newColor = newColor;
 }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange"); // Expected: TypeError

console.log(freddie)

// Questao 9
let greeting;
greetign = {}; // Erro de digitação! Cria o log do objeto, pois criamos um objeto vazio no objeto global! Quando erramos a digitação de greeting como greetign, o interpretador do JavaScript viu isso como global.greetign = {} (ou window.greetign = {} em um navegador).
console.log(greetign); // Expected: {}


// Questao 10
function bark() {
 console.log("Woof!");
}

bark.animal = "dog"; // Isso é possível em JavaScript, pois funções são objetos! (Tudo menos tipos primitivos são objetos)
console.log(Object.keys(bark)) // Expected: [ 'animal' ]
