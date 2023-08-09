// 5! = 1 * 2 * 3 * 4 * 5

let result = 1; // 3 
for (let index = 1; index <= 5; index++) {
    result = result * index;
}
console.log(`Factorial of 5 is ${result}`);

//Assignment:  WAP to find the factorial of numbers: 5, 9, 11, 7



function factorial(num) {
    if (num === 0) {
       return 1; 
    } else {
       return num * factorial(num - 1);  
    }
 }
 
 var result1 = factorial(5);
 console.log(`Factorial using recursion is: ${result1}`);