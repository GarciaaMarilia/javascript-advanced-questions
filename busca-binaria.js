function buscaBinaria(numbers, number) {
 const numbersOrdenados = numbers.sort((a, b) => a - b);

 let left = 0;
 let right = numbersOrdenados.length - 1;

 while (left <= right) {
  let middle = Math.floor((left + right) / 2);

  if (number === numbersOrdenados[middle]) {
   return `Array ordenado: ${numbersOrdenados} Index do numero: ${middle}`;
  } else if (number < numbersOrdenados[middle]) {
   right = middle - 1;
  } else{
   left = middle + 1;
  }
 }

 return -1;
}

console.log(buscaBinaria([1, 3, 5, 7, 9], 9)); // Saída: "Index do número: 4"
console.log(buscaBinaria([1, 14, 5, 25, 9], 30)); // Saída: -1
