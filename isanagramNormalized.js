const regex = /[^\w]/g;

const normalize = (str) => {
 return str.replace(regex, "").toLowerCase().split("").sort().join("");
};

function anagrams(strA, strB) {
 return normalize(strA) === normalize(strB);
}

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("RAIL! SAFETY!", "fairy tales"));
console.log(anagrams("Hi there", "Bye there"));
