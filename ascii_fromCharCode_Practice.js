let n = 5; // you can take input from prompt or change the value
let str = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing characters
  for (let j = 0; j < i; j++) {
    str += String.fromCharCode(j + 65);
  }
  str += "\n";
}
console.log(str);