console.log(`-------------------------- step 1 --------------------------`);
var square = function (num) {
  var result = num * num;
  console.log(`Square of ${num} is :  ${result}`);
};
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

console.log(`-------------------------- step 2 --------------------------`);
console.log(`Type of function is :  ${typeof square}`);

console.log(`-------------------------- step 3 --------------------------`);
var area = function (num1, num2) {
  var resultArea = num1 * num2;
  console.log(`Length of Rectangle : 449  and width of Rectangle : 917  
Area of Rectangle :  ${resultArea}`);
};
area(499, 917);

console.log(`-------------------------- step 4 --------------------------`);
var swap = function (value1, value2) {
  console.log(`before swapping values are : ${value1} and ${value2}`);
  var temp = value1;
  value1 = value2;
  value2 = temp;
  console.log(`after swapping values are : ${value1} and ${value2}`);
};
swap("Mahi", "Raina");
swap(55, 77);

console.log(`-------------------------- step 5 --------------------------`);
var show = function () {
  var str = "JS the most popular language of internet";
  console.log(`The given string is :  ${str}`);
  var totalChar = str.length;
  console.log(`Total character available in the string : ${totalChar}`);
  var charAt6 = str.charAt(6);
  console.log(`Character at index 6 is : ${charAt6}`);
  var charAt11 = str.charAt(11);
  console.log(`Character at index 11 is : ${charAt11}`);
  var charAtLast = str.charAt(str.length - 1);
  console.log(`Character at last is : ${charAtLast}`);
  var charAtFirst = str.charAt(0);
  console.log(`Character at very first is : ${charAtFirst}`);
  var charAtThirdLast = str.charAt(str.length - 3);
  console.log(`Character at third last is : ${charAtThirdLast}`);
  var words = str.split(" ");
  var totalwords = words.length;
  var wordSquare = totalwords * totalwords;
  console.log(`Total number of words of the given string : ${totalwords}
  and square of total number of words is :  ${wordSquare}`);
};
show();
