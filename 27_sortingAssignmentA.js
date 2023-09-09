const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];
console.log(`----- Reverse the array ------`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);
console.log(`----- Apply sort method without custom logic to the array ------`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log(`-----  sort the array in ascending order with custom logic ------`);
arrayRollNumbers.sort((num1, num2)=>{
return num1>num2 ? 1 : -1;
});
console.log(arrayRollNumbers);
console.log(`----- Find the Greatest number from the array ------`);
console.log(arrayRollNumbers[arrayRollNumbers.length-1]);
console.log(`----- Find the smallest number from the array ------`);
console.log(arrayRollNumbers[0]);
console.log(`----- remove duplicates from array ------`);
let removeDuplicates = [... new Set(arrayRollNumbers)]
console.log(removeDuplicates);
