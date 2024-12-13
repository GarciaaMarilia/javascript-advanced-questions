function capitalize(string) {
 let words = [];

 for (let word of string.split(" ")) {
  words.push(word[0].toUpperCase() + word.slice(1));
 }
 return words.join(' ');
}

console.log(capitalize("a short sentence"));
