const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]
console.log(`given array :  ${arrayNumbers}`);
console.log(`--------------- step 1 ---------------`);

console.log(`Total number of elements or length of array is : ${arrayNumbers.length}`);

console.log(`------ step 2 : first and last element in array------`);
let firstElement = arrayNumbers[0]

let lastElement = arrayNumbers[arrayNumbers.length-1]
console.log(`First element is : ${firstElement}`);
console.log(`Last element is : ${lastElement}`);

console.log(`------ step 3 : third last element in array------`);
let thirdLast = arrayNumbers[arrayNumbers.length-3]
console.log(`Third last element in array is : ${thirdLast}`);

console.log(`------ step 4 : find all even numbers in array------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
        console.log(element);
    }
    
}

console.log(`------ step 5 : find all odd numbers in array------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        console.log(element);
    }
    
}

console.log(`------ step 6 : sum of all even positioned numbers in array------`);
let evenSum = 0
for (let index = 0; index < arrayNumbers.length; index=index+2) {
    const element = arrayNumbers[index];
    evenSum += element
    
}
console.log(`Total sum of all even positioned numbers is : ${evenSum}`);

console.log(`------ step 7 : sum of all odd positioned numbers in array------`);
let oddSum = 0
for (let index = 1; index < arrayNumbers.length; index=index+2) {
    const element = arrayNumbers[index];
    oddSum += element
    
}
console.log(`Total sum of all odd positioned numbers is : ${oddSum}`);

console.log(`------ step 8 : sum of all numbers in array------`);
let allSum = 0
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    allSum += element
    
}
console.log(`sum of all elements in array is : ${allSum}`);

console.log(`------ step 9 : numbers which are multiple of 5 in array------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        console.log(`${element}`);
    }
    
}

console.log(`------ step 10 : is number 115 available in array------`);

console.log(arrayNumbers.includes(115));

console.log(`------ step 11 : is number 23 available in array------`);

console.log(arrayNumbers.includes(23));

console.log(`------ step 12 : insert numbers 55, 66 before index 3------`);
arrayNumbers.splice(3, 0, 55, 66)
console.log(arrayNumbers);

console.log(`------ step 13 : delete 3 elements starting from index 4 ------`);
arrayNumbers.splice(4, 3)
console.log(arrayNumbers);
