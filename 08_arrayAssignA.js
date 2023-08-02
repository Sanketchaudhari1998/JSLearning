const arrayFruits = ["Banana", "Orange", "Apple" , "Mango", "Water Melon"]
 console.log(`Given array is : ${arrayFruits}`);
console.log(`-----step 1 :first and last element-----`);
let firstElement = arrayFruits[0]
let lastElement= arrayFruits[arrayFruits.length-1]
console.log(`First element in arrayFruits is : ${firstElement}`);
console.log(`Last element in arrayFruits is : ${lastElement}`);

console.log(`-----step 2 :add element papaya before element banana-----`);
let fruits = ["Banana", "Orange", "Apple" , "Mango", "Water Melon"]
 fruits.unshift("Papaya")
 console.log(fruits);

 console.log(`-----step 3 : remove mango from given array-----`);
 let removeMango = fruits
 removeMango.splice(4, 1)
console.log(removeMango);

console.log(`-----step 4 : add elememt pineapple at last position-----`);
let pineappleAtLast = removeMango
pineappleAtLast.push('Pineapple')
console.log(pineappleAtLast);

console.log(`-----step 5 : insert elememt Dragon fruit before water melon-----`);
let dragonFruit = pineappleAtLast
dragonFruit.splice(4,0,"Dragon Fruit")
console.log(dragonFruit);

console.log(`-----step 6 : replace elememt orange with kiwi-----`);
let replaceOrange = dragonFruit
replaceOrange.splice(2,1,"Kiwi")
console.log(replaceOrange);

console.log(`-----step 7 : log elememts starting from index 1 to 4-----`);
let logElements = replaceOrange
let elements = logElements.slice(1,5)
console.log(elements);

console.log(`-----step 8 : log last 3 elememts using length property-----`);
let last3 = elements
for (let index = 1; index < last3.length; index++) {
    const element = last3[index];
    console.log(element);
    
}
