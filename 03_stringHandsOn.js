console.log(`--------------------------- step 1 ----------------------------`);
var string = "     Hey you are doing good, keep it up     ";
console.log(`Given string is : ${string}`);

console.log(`--------------------------- step 2 ----------------------------`);
var stringLength = string.length;
console.log(`Length of given string is : ${stringLength}`);

console.log(`--------------------------- step 3 ----------------------------`);
var trimString = string.trim();
console.log(`After removed the leading and trailing extra white spaces string is : ${trimString},
 and its lenght is : ${trimString.length}`);

 console.log(`--------------------------- step 4 ----------------------------`);
var startTrim = string.trimStart();
var lengthStartTrim = startTrim.length;
var startspaces = string.length - lengthStartTrim;
var endTrim = string.trimEnd();
var lengthEndTrim = endTrim.length;
var endSpaces = string.length - lengthEndTrim;
var totalSpaces = startspaces + endSpaces;
console.log(`Total number of extra spaces removed in step 3 : ${totalSpaces}`);

console.log(`--------------------------- step 5 ----------------------------`);
var charAt0 = trimString.charAt(0);
var charAtLast = trimString.charAt(trimString.length - 1);
console.log(`After trim ---> first character : ${charAt0} , last character : ${charAtLast}`);

console.log(`--------------------------- step 6 ----------------------------`);
var words = trimString.split(' ');
var wordsResult = words.length;
console.log(`Total number of words in string after step 3 : ${wordsResult}`);

console.log(`--------------------------- step 7 ----------------------------`);
var index = trimString.indexOf('good');
console.log(`Index of word good is : ${index}`);

console.log(`--------------------------- step 8 ----------------------------`);
var substring = trimString.slice(22);
console.log(`Substring starting from index 22 :  ${substring}`);

console.log(`--------------------------- step 9 ----------------------------`);
var lastWord = trimString.endsWith("up");
console.log(`String ends with word "up" :  ${lastWord}`);

console.log(`--------------------------- step 10 ----------------------------`);
var startWord = trimString.startsWith("Hey");
console.log(`String start with word "Hey" :  ${startWord}`);