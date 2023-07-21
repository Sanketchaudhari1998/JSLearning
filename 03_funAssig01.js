console.log("---------------------------------------step: 1 --------------------------------------");
function show() {
    console.log("This is first function");
    console.log("This is second function");
}
show()

console.log("---------------------------------------step: 2-----------------------------------------");
function personalDetails(firstName, lastName, collegeName){
    console.log('First Name: ', firstName, '  Last Name :', lastName, '   College Name :', collegeName);
   
    
}
 personalDetails("Sanket", "Chaudhari", "College of Food Technology Naigaon");
 console.log("--------------------------------------step: 3----------------------------------------");

 function swapValues(n1, n2){
    console.log('Before swap ---> Argument 1=', n1, '  Argument 2=', n2);
    var temp = n1;
    n1 = n2;
    n2 = temp;
    console.log('After swap ---> Argument 1=', n1, '  Argument 2=', n2);
 }
 var name1 = "Virat";
 var name2 = "Anushka";
 swapValues( name1, name2);

 var num1 = 1000;
 var num2 = 2000;
 swapValues(num1, num2);

 console.log("--------------------------------------step: 4----------------------------------------");
function addThreeValues(arg1, arg2, arg3){
    console.log('Addition is :   ', arg1 + arg2 + arg3);
}
 addThreeValues(10.23, 600, 40);
 addThreeValues("Hello", "Good", "Morning");

 console.log("--------------------------------------step: 5----------------------------------------");
function bankDetails(bankName, accountNum, location, pinCode){
    console.log('Bank Name :-', bankName, '  Account Number :-', accountNum, '   Location :-', location, '   Pincode :-,', pinCode );
}
 bankDetails("CITI Bank", 3456782345, "Pune", 431202)
 bankDetails("Axis Bank", 7856782345, "Mumbai", 441202)
 bankDetails("HDFC Bank", 8956782345, "Pune", 631202, "open")
 console.log("------------------------------------ END OF CODE ----------------------------------------");



