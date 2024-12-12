function chunk(arr, size) {
 const newChunk = [];

 for (let i = 0; i < arr.length; i += size) {
  newChunk.push(arr.slice(i, i + size));
 }

 return newChunk;
}

// function chunk(arr, size) {
//  const newChunk = [];
//  let index = 0;

//  while (index < arr.length) {
//   newChunk.push(arr.slice(index, index + size));
//   index += size;
//  }

//  return newChunk;
// }

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
