console.log(`----------------Implicit Boolean Conversion to Number ---------------------`);
var result = '4' - true;
console.log(`${result}`);
console.log(`result is 3 because their is implicit conversion from string '4' to number 4 and boolean value true to 1`);
console.log(`---------------------------------------------------------------------------------`);
var result = 4 + true;
console.log(`${result}`);
console.log(`result is 5 because their is implicit conversion from boolean value true to 1`);
console.log(`---------------------------------------------------------------------------------`);
var result = 4 + false;
console.log(`${result}`);
console.log(`result is 4 because their is implicit conversion from boolean value false to 0`);