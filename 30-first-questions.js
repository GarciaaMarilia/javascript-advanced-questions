// Questão 23
for (let i = 1; i < 5; i++) {
 if (i === 3) continue; // A palavra-chave continue pula uma iteração se a condição retorna true.
 //  console.log(i); // Expected: 1, 2, 4
}

// Questão 24
String.prototype.giveMariliaPizza = () => {
 // String é um construtor embutido, no qual podemos adicionar propriedades.
 // Nesse caso adicionamos um método ao seu protótipo.
 // Tipos primitivos string são automaticamente convertidos em um objeto string, gerado pelo construtor String.
 // Assim, todas as strings (que são objetos string) tem acesso ao método.
 return "Just give Marilia pizza already!";
};

const name = "Marilia";

console.log(name.giveMariliaPizza()); // Expected: Just give Marilia pizza already!

const anotherString = "anotherString";

console.log(anotherString.giveMariliaPizza()); // Expected: Just give Marilia pizza already!

console.log(typeof "Marilia", typeof new String("Marilia")); // Expected: string object

// Questão 25
<div onclick="console.log('first div')">
 <div onclick="console.log('second div')">
  <button onclick="console.log('button')">Click!</button>
 </div>
</div>;

// Questão 26
function sayHi() {
 return (() => 0)(); // IIFE (Immediately Invoked Function Expression ou Expressão de Função Invocada Imediatamente)
}

console.log(typeof sayHi()); // Expected: number

// Questão 27
// Qual desses tem valor falsy?
0; // Expected: false
// Funções construtoras, como new Number e new Boolean são truthy.
new Number(0); // Expected: true
(""); // Expected: false
(" "); // Expected: true
new Boolean(false); // Expected: false
undefined; // Expected: false

// Questão 28
// typeof 1 retorna "number". typeof "number" retorna "string"
console.log(typeof typeof 1); // Expected: string

// Questão 29
const numbers = [1, 2, 3];
numbers[10] = 11;
// Quando você define um valor para um elemento em um array que excede o tamanho do próprio array, o JavaScript cria algo chamado "empty slots" (espaços vazios).
// Na verdade, esses espaços vazios tem o valor de undefined, mas você verá algo como:
//[1, 2, 3, 7 x empty, 11]
//dependendo de onde você o executa, pois é diferente para cada navegador, node etc.

console.log(numbers); // Expected: [ 1, 2, 3, <7 empty items>, 11 ]

// Questão 30
(() => {
 // IIFE (Immediately Invoked Function Expression ou Expressão de Função Invocada Imediatamente)
 let x, y;
 try {
  throw new Error();
  // O bloco do catch recebe o argumento x.
  // Esse não é o mesmo x da variável de quando estamos passando os argumentos.
  // A variável x é de escopo do seu bloco.
 } catch (x) {
  (x = 1), (y = 2); // y pertence ao bloco maior
  console.log(x); // Expected: 1
 }
 console.log(x); // Expected: undefined
 console.log(y); // Expected: 2
})();
