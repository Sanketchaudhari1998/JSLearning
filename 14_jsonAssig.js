let jsonEmployeeInfo = `{
"name" : "Aleix Melon",
"id": "E00245",
"role": ["Dev", "DBA"],
 "age":23,
"doj": "11-12-2019",
 "married": false,
"addrerss":{
    "street":"32, Laham st.",
    "city": "Innsbruck",
    "country": "Austria"
},
"referred-by": "E0012"
}`;

const objectEmployeeInfo = JSON.parse(jsonEmployeeInfo);
console.log(`------------- log role 'Dev' -------------`);
console.log(objectEmployeeInfo.role[0]);
console.log(`------------- log last name 'Melon' -------------`);
let nameArray = objectEmployeeInfo.name.split(" ");
console.log(nameArray[1]);
console.log(`======= log only joining year of employee =======`);
let joinYear = new Date(objectEmployeeInfo.doj);
console.log(joinYear.getFullYear());
