// "use strict";
// Questão 9: O modo estrito ("use strict") força uma verificação mais rigorosa no JavaScript,
// exigindo que todas as variáveis sejam declaradas antes de seu uso. Caso "use strict" estivesse
// ativado, uma referência incorreta a "greetign" resultaria em um ReferenceError.

// Questão 1
function sayHi() {
 console.log(name); // Expected: undefined
 console.log(age); // Expected: ReferenceError
 var name = "Marilia"; // Variáveis com "var" são levantadas (hoisting) e inicializadas com undefined.
 const age = 27; // Variáveis com "const" e "let" são levantadas, mas não inicializadas.
}

sayHi();

// Questão 2
for (var i = 0; i < 3; i++) {
 setTimeout(() => console.log(i), 1); // Expected: 3, 3, 3 (porque "var" não tem escopo de bloco)
}

for (let i = 0; i < 3; i++) {
 setTimeout(() => console.log(i), 1); // Expected: 0, 1, 2 (porque "let" tem escopo de bloco)
}

// Questão 3
const shape = {
 radius: 10,
 diameter() {
  // Função normal
  return this.radius * 2;
 },
 perimeter: () => 2 * Math.PI * this.radius,
 // Arrow functions não possuem seu próprio "this"; o "this" faz referência ao escopo onde
 // a arrow function foi definida, que neste caso é o escopo global. Por isso, `this.radius`
 // está indefinido, resultando em NaN.
};

console.log(shape.diameter()); // Expected: 20
console.log(shape.perimeter()); // Expected: NaN

// Questão 4
// Operador unário "+" tenta converter um valor para número.
console.log(+true); // Expected: 1
// Operador unário "!" inverte um valor booleano.
console.log(!"Lydia"); // Expected: false

// Questão 5
const bird = { size: "small" };
const mouse = { name: "Mickey", small: true };

console.log(mouse.bird?.size); // Expected: Cannot read properties of undefined (reading 'size')
console.log(mouse[bird.size]); // Expected: true (acessa mouse["small"])
console.log(mouse[bird["size"]]); // Expected: true (acessa mouse["small"])

// Questão 6
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello"; // `d` também reflete essa mudança porque `c` e `d` referenciam o mesmo objeto.
console.log(d.greeting); // Expected: Hello

// Questão 7
let a = 3;
let b = new Number(3); // `new Number()` cria um objeto Number, não um valor primitivo.
let c = 3;

console.log(a == b); // Expected: true (compara o valor após conversão)
console.log(a === b); // Expected: false (tipo e valor diferentes)
console.log(b === c); // Expected: false (tipo e valor diferentes)
console.log(typeof b, b, typeof a, a); // Expected: object Number {3}, number 3

// Questão 8
class Chameleon {
 static colorChange(newColor) {
  // Função estática que pertence ao construtor Chameleon e não é herdada por instâncias.
  this.newColor = newColor;
  return this.newColor;
 }

 constructor({ newColor = "green" } = {}) {
  this.newColor = newColor;
 }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange"); // Expected: TypeError (colorChange não é uma função da instância `freddie`)

console.log(freddie);

// Questão 9
let greeting;
greetign = {}; // Erro de digitação! Como "use strict" não está ativado, o JS cria `greetign` no escopo global.
console.log(greetign); // Expected: {}

// Questão 10
function bark() {
 console.log("Woof!");
}

bark.animal = "dog";
// Isso é possível em JavaScript porque funções são objetos, então podemos adicionar propriedades a elas.
console.log(Object.keys(bark)); // Expected: [ 'animal' ]
