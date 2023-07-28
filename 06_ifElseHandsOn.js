console.log(`---------------------- Step 1 ----------------------`);
function evenOrOdd(num) {
  if (num % 2 == 0) {
    console.log(`The given value ${num} is : EVEN`);
  } else {
    console.log(`The given value ${num} is : ODD`);
  }
}
evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);

console.log(`---------------------- Step 2 ----------------------`);
function stringChar(arg) {
  if (arg.length > 10) {
    console.log(`JavaScript-ES6 has more than 10 characters`);
  } else {
    console.log(`JavaScript-ES6 has not more than 10 characters`);
  }
}
stringChar("JavaScript-ES6");

console.log(`---------------------- Step 3 ----------------------`);
function Statement(arg1) {
  //  var result = arg1.startsWith('Java')
  // console.log(result);
  if (arg1.startsWith("Java") == true) {
    console.log("Given String JavaScript Language starts with Java");
  } else {
    console.log("Given String JavaScript Language  not starts with Java");
  }
}
Statement("JavaScript Language");
