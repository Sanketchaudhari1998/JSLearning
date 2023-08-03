let rows = 6;
let string = "";

// External loop
for (let i = 1; i <= rows; i++) {
  
  // printing spaces
  for (let j = 1; j <= rows - i; j++) {
    string += " ";
  }
  
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

console.log(`======== Left Triangle Pattern ========`);

let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {

   // printing star
   for (let k = 0; k < i; k++) {
    str += "*";
  }
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    str += " ";
  }
 
  str += "\n";
}
console.log(str);

console.log(`======= hollow square =======`);

let x = 5; // row or column count
// defining an empty string
let string1 = "";

for(let i = 0; i < x; i++) { // external loop
  for(let j = 0; j < x; j++) { // internal loop
    if(i === 0 || i === x - 1) {
      string1 += "*";
    }
    else {
      if(j === 0 || j === x - 1) {
        string1 += "*";
      }
      else {
        string1 += " ";
      }
    }
  }
  // newline after each row
  string1 += "\n";
}
// printing the string
console.log(string1);


console.log(`======== right Triangle Pattern ========`);
let y = 5
let string2 = ""
for (let index = 1; index < y; index++) {
    //  for spacing
  for (let i = 0; i < y - index ; i++) {
    string2 += " ";
    
  }
    //  for star
  for (let j = 0; j < index; j++) {
    string2 += "*"
    
  }
   // newline after each row
   string2 += "\n";
}
// printing the string
console.log(string2);


console.log(`========================================`);
// let result = ''
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j<=i; j++) {
//        result = result.concat(" ")
//        }
//        for (let k =1; k <= 5; k++) {
//         result = result.concat("*")

//        }
//        result = result.concat('\n')
        
//     }
//     console.log(result);

