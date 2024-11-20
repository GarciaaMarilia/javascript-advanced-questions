// Questão 51
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
// array.reduce(callback, initialValue);
// callback: Uma função executada para cada elemento do array. Ela recebe os seguintes argumentos:
// accumulator: O acumulador que contém o valor retornado na iteração anterior.
// currentValue: O elemento atual do array sendo processado.
// currentIndex (opcional): O índice do elemento atual.
// array (opcional): O array original.

// initialValue (opcional): O valor inicial do acumulador.
// Se fornecido, será usado na primeira iteração.
// Se omitido, o primeiro elemento do array será usado como o accumulator, e a iteração começa no segundo elemento.

// Expected:
// 1 - x: 1 y: 2
// 2 - x: undefined y: 3
// 3 - x: undefined y: 4

console.log(
 [1, 2, 3, 4].reduce((x, y) => {
  return x + y;
 })
); // Neste caso, ele retorna a soma dos elementos do array

// Questão 52
console.log(Number(2) === Number(2)); // Expected: true
console.log(Boolean(false) === Boolean(false)); // Expected: true
console.log(Symbol("foo") === Symbol("foo")); // Expected: false
// Todo símbolo (Symbol) é totalmente único.
// O objetivo do argumento passado ao símbolo é fornecer uma descrição ao símbolo.

// Questão 53
console.log("🥑" + "💻"); // Expected: 🥑💻

// Questão 54
async function getData() {
 return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data); // Expected: Promise { <pending> }

// Para acessar o retorno I made it de getData(), fariamos:

// const dataWithThen = getData().then((response) => console.log(response)); // Expected: I made it!

// Questão 55
function addToList(item, list) {
 // O método .push() retorna o length do novo array!
 // Este método modifica o array
 return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result); // Expected: 2

// Questão 56
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape); // Expected: 10, 20

const shapeCopie = { ...box };
shapeCopie.x = 100;

console.log(shapeCopie); // Expected: 100, 20

