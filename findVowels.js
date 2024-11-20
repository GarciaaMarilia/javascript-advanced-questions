function findVowels(word) {
 const vowels = ["a", "e", "i", "o", "u"];
 let count = 0;

 for (const char of word) {
  if (vowels.includes(char)) count++;
 }

 return count;
}

console.log(findVowels('marilia'));
