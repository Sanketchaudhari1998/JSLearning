console.log(`----------------------------TASK 1 ---------------------------`);
var greaterNumber = function (num1, num2) {
  var result = num1 > num2 ? num1 : num2;
  console.log(`The greater number between ${num1} and ${num2} is : ${result} `);
};
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(`----------------------------TASK 2 ---------------------------`);
var isEvenOrOddNum = function (num) {
  var oddEven = num % 2 == 0 ? "Even" : "Odd";
  console.log(`The number ${num} is : ${oddEven}`);
};
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`----------------------------TASK 3 ---------------------------`);
var wordLength = function (arg) {
  var length = arg.length;
 var oddEvenLength = length%2==0 ? "Even" : "Odd";
 console.log(`${arg} length is : ${oddEvenLength}`);
};
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");
