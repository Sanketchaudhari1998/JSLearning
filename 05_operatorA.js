console.log(`---------------------------- TASK 1 ----------------------------`);
function squareOfWordLength(arg) {
  var wordLength = arg.length;
  var wordLengthSquare = wordLength * wordLength;
  console.log(
    `Length of word is : ${wordLength}  and Square of word length is : ${wordLengthSquare}`
  );
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(
  `---------------------------- TASK 2 -----------------------------`
);
var string = function () {
  var givenString = "I am Angular Developer";
  var stringLength = givenString.length;
  var stringWords = givenString.split(" ");
  console.log(`Given string is : ${givenString}`);
  console.log(`Length of given string is : ${stringLength}`);
  console.log(
    `Total number of words in given string is : ${stringWords.length}`
  );
  var divide = stringLength / stringWords.length;
  console.log(
    `When String length is divided by total no. of words in given string then result is : ${divide}`
  );
  var Multiplication = stringLength * stringWords.length;
  console.log(
    `When String length is multiply by total no. of words in given string then result is : ${Multiplication}`
  );
};
string();
