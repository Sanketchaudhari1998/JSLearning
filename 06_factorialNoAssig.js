//Assignment:  WAP to find the factorial of numbers: 5, 9, 11, 7
function factorial(num) {
    let result = 1;  
for (let index = 1; index <= num; index++) {
    result = result * index;
}
console.log(`Factorial of ${num} is ${result}`);
}
factorial(5);
factorial(9);
factorial(11);
factorial(7);