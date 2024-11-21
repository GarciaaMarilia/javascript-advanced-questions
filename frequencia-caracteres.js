function frequencyCaracteres(word) {
 const chars = new Map();
 for (const char of word) {
  if (!chars.has(char)) {
   chars.set(char, 0);
  }
  chars.set(char, chars.get(char) + 1);
 }

 return chars;
}

console.log(frequencyCaracteres("banana"))
