console.log(`----------------- adding 10 in every element-------------------`);
const array_numbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
let newarray = array_numbers.map((element)=>{
return element+10
});
console.log(newarray);
console.log(`----------------- Square of every element-------------------`);
let square = array_numbers.map((element)=>{
return element*element*element
});
console.log(square);
console.log(`----------------- add index of element in element-------------------`);
let addIndex = array_numbers.map((element,index)=>{
return element+index
});
console.log(addIndex);