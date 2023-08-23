console.log(`--------------------- step - 1 -----------------------`);
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((num)=>{
    console.log(`Element : ${num} _ index : ${arrayNumbers.indexOf(num)}`);
   
})

console.log(`--------------------- step - 2 -----------------------`);
console.log(`Positive numbers in given array are :`);
arrayNumbers.forEach((num)=>{
    if (num > 0) {
        console.log(num);
    }
})

console.log(`--------------------- step - 3 -----------------------`);
console.log(`Negative numbers in given array are :`);
let negativeNum =[ ]
arrayNumbers.forEach((num)=>{
    if (num < 0) {
       negativeNum.push(num)
    }
}) 
console.log(negativeNum);

console.log(`--------------------- step - 4 -----------------------`);
console.log(`Even numbers in given array are :`);
arrayNumbers.forEach((num)=>{
if (num%2==0) {
    console.log(num);
}
})

console.log(`--------------------- step - 5 -----------------------`);
let sum = 0;
arrayNumbers.forEach((num)=>{
sum = sum + num
})
console.log(`Sum of all elements in given array is : ${sum}`);

console.log(`--------------------- step - 6 -----------------------`);
console.log(`Even indexed elements in given array are :`);
arrayNumbers.forEach((num)=>{
    let numIndex = arrayNumbers.indexOf(num);
    if (numIndex%2==0) {
        console.log(num);
    }
})