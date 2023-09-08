const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`----- sum of all numbers using traditional way ------`);
let sum =0;
let traditionalSum = array_numbers.forEach(element => {
    sum = sum + element;
});
console.log(sum);

console.log(`----- sum of all numbers using Reduce method ------`);
let sumByReduce = array_numbers.reduce((previousElement, currentElement)=>{
    return previousElement+currentElement;
})
console.log(sumByReduce);

console.log(`----- sum of all numbers which are multiple of 5 ------`);
let multiple5 = array_numbers.filter((element)=>{
    return element%5==0
})
let sumMultiple5 = multiple5.reduce((previousElement, currentElement)=>{
    return previousElement+currentElement;
})
console.log(sumMultiple5);