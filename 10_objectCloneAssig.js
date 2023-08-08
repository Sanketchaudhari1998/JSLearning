console.log(`=============================Merge object===============================================`);
let personalDetails = {
    firstName : "Sanket",
    lastName : "Chaudhari",
    age : 25,
    gender : "Male",
    city : "Jalgaon",
    graduation : "B. Tech",
}

 let collegeDetails = {
    collegeName : "College of food technology naigaon",
    location : "Naigaon Nanded",
    university : "VNMKV Parbharni",
    establishment : 2007
}

let mergedObject = Object.assign({}, personalDetails, collegeDetails)
console.table(mergedObject);

console.log(`=============================Freeze Array===============================================`);

let friends = ["Pravin", "Shubham", "Akash", "Prafull", "Dhiraj"]
 Object.freeze(friends);
 for (const friendsName of friends) {
    console.log(friendsName);
 }

 console.log(`===========================Reverse the word technology in given string=================================================`);

 let string = "Codemind Technology"
console.log(`Given string : ${string}`);
let stringSlice = string.slice(9,string.length)

let concat =""
for (let index = stringSlice.length; index >= 0 ; index--) {
   
    let element = stringSlice.charAt(index)
     concat = concat + element
    
}


let stringSlice1 = string.slice(0,9)
let halfReverse = stringSlice1+concat
console.log(halfReverse);