console.log(`--------------------step - 1 --------------------`);
let greet = () => {
    console.log("Good Morning, Today is Tuesday");
}
greet()
console.log(`--------------------step - 2 --------------------`);
let multiplication = (num1,num2,num3=1) => {
console.log(`Multiplication of ${num1},${num2},${num3} is : ${num1*num2*num3}`);
}
multiplication(5,5,2);
multiplication(10,4);
console.log(`--------------------step - 3 --------------------`);
let addition = (num1,num2,num3,num4,num5) => {
console.log(`Addition is : ${num1+num2+num3+num4+num5}`);
return
}
addition(100,100,200,349,756)
addition("I am", " learning", " ES6", " features", " in depth")
