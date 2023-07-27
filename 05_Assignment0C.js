
var result = 0 == ' ';
console.log(`${result}`);
console.log(`result is true because their is implicit conversion from string value ' ' to number 0`);
console.log(`---------------------------------------------------------------------------------`);
var result = 0 == '0';
console.log(`${result}`);
console.log(`result is true because their is implicit conversion from string 0 to number 0`);
console.log(`---------------------------------------------------------------------------------`);
var result = 0 == false;
console.log(`${result}`);
console.log(`result is true because their is implicit conversion from boolean value false to number 0`);
console.log(`---------------------------------------------------------------------------------`);
var result = null == undefined;
console.log(`${result}`);
console.log(`result is true because both having empty value or no value`);
console.log(`---------------------------------------------------------------------------------`);
var result = 1 == [1];
console.log(`${result}`);
console.log(`result is true because both having same number value`);
console.log(`---------------------------------------------------------------------------------`);
var result = 1 == true;
console.log(`${result}`);
console.log(`result is true because their is implicit conversion from boolean value true to number 1`);
console.log(`---------------------------------------------------------------------------------`);
var result = 1 == '1';
console.log(`${result}`);
console.log(`result is true because their is implicit conversion from string 1 to number 1`)