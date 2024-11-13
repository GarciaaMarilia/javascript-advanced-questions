// Questão 31
console.log(
 [
  [0, 1],
  [2, 3],
  //[1, 2] é nosso valor inicial. É o valor que começamos, e portanto o valor do primeiro acc.
  // Durante a primeira iteração, acc é [1,2], e cur é [0, 1]. Nós concatemos ambos, o que resulta em [1, 2, 0, 1].
  // Então, [1, 2, 0, 1] é acc e [2, 3] é o cur. Concatenamos novamente, e chegamos em [1, 2, 0, 1, 2, 3].
 ].reduce(
  (acc, cur) => {
   return acc.concat(cur);
  },
  [1, 2]
 )
); // Expected: [1, 2, 0, 1, 2, 3]

// Questão 32
// null é falsy. !null retorna true. !true retorna false.
!!null; // Expected: false
// "" é falsy. !"" retorna true. !true retorna false.
!!""; // Expected: true
// 1 é truthy. !1 retorna false. !false retorna true.
!!1; // Expected: true

// Questão 33
// Strings são iteráveis.
// O operador do spread ... mapeia todo caractére de um iterável para um elemento.
console.log([..."Marilia"]); // Expected: [ 'M', 'a', 'r', 'i', 'l', 'i', 'a' ]

// Questão 34
let person = { name: "Marilia" };
// Quando você atribui uma referência de uma variável para outra, você faz uma cópia de sua referência.
const members = [person];
person = null;

console.log(members); // Expected: [ { name: 'Marilia' } ]

// Questão 35
const person1 = {
 name: "Marilia",
 age: 27,
};

for (const item in person1) {
 console.log(item); // Expected: name age
}

// Questão 36
// Para adição, a associatividade é esquerda-para-direita.
console.log(3 + 4 + "5"); // Expected: "75"

// Questão 37
// o parseInt checa se os caracteres na string são válidos.
// Depois de encontrar um caracter que não é um número válido no radix, ele interrompe o parse e ignora os seguintes caracteres.
const num = parseInt("7*6", 10);
const num2 = parseInt(7 * 6, 10);
console.log(num); // Expected: 7
console.log(num2); // Expected: 42

// Questão 38
// A função map cria um novo array e insere os valores retornados da função.
console.log(
 [1, 2, 3].map((num) => {
  // Entretanto, não se retorna o valor.
  // Quando não se retorna um valor para a função, a função retorna undefined.
  // Para cada elemento do array, o bloco de função é chamado, então para cada elemento é retornado undefined.
  if (typeof num === "number") return;
  return num * 2;
 })
); // Expected: [ undefined, undefined, undefined ]

// Questão 39
function getInfo(member, year) {
 member.name = "Lydia";
 year = "1998";
}
const person2 = { name: "Sarah" };
const birthYear = "1997";
getInfo(person2, birthYear);
console.log(person2, birthYear);

// Questão 40
function greeting() {
 // Com a declaração throw, podemos criar erros personalizados.
 // Com esta declaração, você pode lançar exceções.
 // Uma exceção pode ser uma string, um número, um booleano ou um objeto.
 // Nesse caso, nossa exceção é a string 'Hello world!'.
 throw "Hello world!";
}
function sayHi() {
 try {
  const data = greeting();
  console.log("It worked!", data);
  //Com a declaração catch, podemos especificar o que fazer se uma exceção for lançada no bloco try.
  // Uma exceção foi lançada: a string 'Hello world'. e agora é igual a essa string que registramos.
  // Isso resulta em 'Oh no an error: Hello world!'.
 } catch (e) {
  console.log("Oh no an error:", e);
 }
}
sayHi(); // Expected: Oh no an error: Hello world!
