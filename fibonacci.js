function fibonacciSequence(num) {
 if (num === 1) return [0];
 if (num === 2) return [0, 1];

 const sequence = fibonacciSequence(num - 1);

 const nextValue =
  sequence[sequence.length - 1] + sequence[sequence.length - 2];

 return [...sequence, nextValue];
}

function fibonacciElement(num) {
 if (num < 2) {
  return num;
 }

 return fibonacciElement(num - 1) + fibonacciElement(num - 2);
}

console.log(fibonacciSequence(21));
console.log(fibonacciElement(4));
