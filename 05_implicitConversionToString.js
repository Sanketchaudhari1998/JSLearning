console.log(`--------------- Implicit Conversion to String --------------------`);
var result = '3' + 2;
console.log(`${result}`);
console.log(`result is 32 because their is implicit conversion from number 2 to string '2'`);
console.log(`---------------------------------------------------------------------------------`);
var result = '3' + true;
console.log(`${result}`);
console.log(`result is 3true because their is implicit conversion from boolean value true to string 'true'`);
console.log(`---------------------------------------------------------------------------------`);
var result = '3' + undefined;
console.log(`${result}`);
console.log(`result is 3undefined because their is implicit conversion from datatype undefined to string 'undefined'`);
console.log(`---------------------------------------------------------------------------------`);
var result = '3' + null;
console.log(`${result}`);
console.log(`result is 3null because their is implicit conversion from null to string 'null'`);