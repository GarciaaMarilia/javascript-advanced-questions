function steps(n) {
 const output = Array.from({ length: n }, () => " ");

 for (let i = 0; i < n; i++) {
  output[i] = "#";
  console.log(output.join(""));
 }
}


steps(4);
steps(10);
