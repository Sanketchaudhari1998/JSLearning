let arr= [4, 5, 4 , 5, 8, 5, 7, 8, 9, 7, 8];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      j--; // Decrement j to handle the shifted indices after removal
    }
  }
}
console.log(arr);

 // Output: [4, 5, 8, 7, 9]


