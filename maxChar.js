function maxChar(string) {
 const countChar = new Map();

 for (const char of string) {
  countChar.set(char, (countChar.get(char) || 0) + 1);
 }

 let length = 0;
 let character = "";
 for (let [char, count] of countChar.entries()) {
  if (count > length) {
   length = count;
   character = char;
  }
 }

 return character;
}

console.log(maxChar("abcccccccddddddddddddddddddddd"));
