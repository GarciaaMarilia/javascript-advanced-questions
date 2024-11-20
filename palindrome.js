function isPalindrome(word) {
 const wordNormalized = word.toLowerCase();

 const reversedWord = wordNormalized.split("").reverse().join("");
 return reversedWord === word;
}

console.log(isPalindrome("Qualquer"));
console.log(isPalindrome("ana"));
console.log(isPalindrome("carro de corrida"));



