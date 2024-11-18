function checkAnagrams(words) {
 const anagrams = new Map();
 for (const word of words) {
  const sortedWord = word.split("").sort().join(""); // split: converte para array de strings. sort: ordena alfabeticamente. join: converte em string novamente
  if (!anagrams.has(sortedWord)) {
   anagrams.set(sortedWord, []);
  }
  anagrams.get(sortedWord).push(word);
 }
 return Array.from(anagrams.values());
}

const words = [
 "listen",
 "silent",
 "evil",
 "vile",
 "restful",
 "fluster",
 "dusty",
 "study",
 "elbow",
 "below",
 "stressed",
 "desserts",
 "brag",
 "grab",
 "part",
 "trap",
 "cat",
 "act",
 "night",
 "thing",
];

console.log(checkAnagrams(words));
