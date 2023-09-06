const array = [1, 2, 3, 5, 7, 9];
// Transform
//            [1, 4, 9, 25, 49, 81]
const arrayOfSquare = array.map((currentValue) => {
    return currentValue * currentValue;
});
console.log(arrayOfSquare);