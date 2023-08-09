console.log(`============== step 1 ================`);
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
let arrayNumsClone = arrayNums;
arrayNumsClone.push(55, 66);
console.log(`Original Array :- ${arrayNums}`);
console.log(`Shallow cloned array with updated values :- ${arrayNumsClone}`);

console.log(`============== step 2 ================`);
let cloneWithSpread = [...arrayNums];
arrayNums.push(10,25);
console.log(`Original object with updated values :- ${arrayNums}`);
console.log(`Deep cloned object :- ${cloneWithSpread}`);

console.log(`============== step 3 ================`);
let arrayEven = [2, 30, 14, 8];
let mergedArray = [...arrayNums, ...arrayEven]
console.log(`Merged arrayNums and arrayEven :- ${mergedArray}`);

console.log(`============== step 5 ================`);
let employee_info = {
    emp_id : 27,
    emp_name : "John Doe",
    salary : {
        july_month :"40,000INR",
        aug_month :"50,000INR",
        jun_month :"65,000INR",
    },
    address : {
        locality : {
            colony : "OM Vrundavan Society",
            street : "Kanch Pokli, 431202",
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India",
        showAddress : function () {
            console.log(`Eployee Address :-  ${this.locality.colony}, ${this.locality.street}, ${this.city}, ${this.state}, ${this.country}`);
        }
    },
    mobiles : ["+91 8600 3456 88", "1800- 4567 32", "+91 9096 5678 77"]
}

employee_info.address.showAddress();
console.log(`Employee Mobile numbers :- ${employee_info.mobiles}`);

console.log(`============== step 6 ================`);
let clonedEmployee_info = JSON.parse(JSON.stringify(employee_info));
let clonedSalaryUpdate = clonedEmployee_info.salary.july_month = "80,000INR";
let origCountryUpdate = employee_info.address.country = "United Kingdom";
console.log(`Updated value for clonedEmployee_info object is :- ${clonedSalaryUpdate}`)
console.log(`Updated value for original object is :- ${origCountryUpdate}`);