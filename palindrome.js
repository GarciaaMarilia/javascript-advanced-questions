// function isPalindrome(word) {
//  const wordNormalized = word.toLowerCase();

//  const reversedWord = wordNormalized.split("").reverse().join("");
//  return reversedWord === word;
// }

function isPalindrome(string) {
 // usa ponteiros
 let left = 0;
 let right = string.length - 1;

 while (left < right) {
  if (string[left] !== string[right]) {
   return false;
  }
  left++;
  right--;
 }
 return true;
}

console.log(isPalindrome("Qualquer"));
console.log(isPalindrome("ana"));
console.log(isPalindrome("carro de corrida"));
