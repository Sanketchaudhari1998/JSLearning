
function factorial(num) {
    let result = "1"
   for (let index = 1; index <= num; index++) {
   result = result*index
    
   }   
   console.log(`Factorial of ${num} is : ${result}`);
    }

factorial(4)
factorial(5)
factorial(3)
factorial(10)
factorial(6)