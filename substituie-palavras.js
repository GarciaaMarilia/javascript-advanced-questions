function substituiPalavras(frase, str1, str2) {
 const palavras = frase.split(" ");

 const index = palavras.indexOf(str1);

 if(index === -1) return "Palavra inexistente!"
 palavras[index] = str2;

 return palavras.join(" ");
}

console.log(substituiPalavras("Eu gosto de café", "café", "chá"));
// Saída: "Eu gosto de chá"
