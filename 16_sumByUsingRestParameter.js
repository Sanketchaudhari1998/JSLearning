// sum of all elements in array by using rest parameter

function add(...num ){
    let sum = 0
    for (let index = 0; index < num.length; index++) {
        let element = num[index];
        sum = sum + element
        
    }
    console.log(`Sum of all elements in array is ${sum}`);
  }
  add(5, 6);
  add(9, 5, 6);
  add(78, 90, 51, 68);
  add(89, 90, 45,78, 90, 51, 68);

// another approach or way to solve above code
console.log("another approach or way to solve above code showing similar result");

  function add(num1,num2,...num3 ){
    let sum2 = num1+num2
    for (let index = 0; index < num3.length; index++) {
        let element = num3[index];
        sum2 = sum2 + element
        
    }
    console.log(`Sum of all elements in array is ${sum2}`);
  }
  add(5, 6);
  add(9, 5, 6);
  add(78, 90, 51, 68);
  add(89, 90, 45,78, 90, 51, 68);