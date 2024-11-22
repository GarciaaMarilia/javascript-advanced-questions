function quickSort(numbers, left = 0, right = numbers.length - 1) {
 if (left < right) {
  const pivotIndex = partition(numbers, left, right);

  quickSort(numbers, left, pivotIndex);
  quickSort(numbers, pivotIndex + 1, right);
 }

 return numbers;
}

function partition(numbers, left, right) {
 const pivot = numbers[right];
 let i = left - 1;

 for (let j = left; j < right; j++) {
  if (numbers[j] <= pivot) {
   i++;
  }
 }
 const newArray = ([numbers[i + 1], numbers[right]] = [
  numbers[right],
  numbers[i + 1],
 ]);

 return newArray, i;
}

console.log(quickSort([5, 3, 7, 6, 2, 9]));
