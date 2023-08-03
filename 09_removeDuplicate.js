let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8]
uniqueArray  = []

for (const element of array) {
    
    value = uniqueArray.includes(element)
    if (value == false) {
        uniqueArray.push(element)
    }
    
}
console.log(uniqueArray);
    

    
   


