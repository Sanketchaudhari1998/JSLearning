const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`--------------- numbers greater than 50 -----------------`);
let greater50 = array_numbers.filter((element)=>{
    return element>50;
})
console.log(greater50);
console.log(`--------------- even numbers -----------------`);
let evenNum = array_numbers.filter((element)=>{
    return element%2==0;
})
console.log(evenNum);
console.log(`--------------- odd numbers -----------------`);
let oddNum = array_numbers.filter((element)=>{
    return element%2==1;
})
console.log(oddNum);
console.log(`--------------- numbers multiuple of 5 -----------------`);
let multiple5 = array_numbers.filter((element)=>{
    return element%5==0;
})
console.log(multiple5);
console.log(`--------------- numbers between 20 and 50 -----------------`);
let between = array_numbers.filter((element)=>{
    return element>20 && element<50 ;
})
console.log(between);