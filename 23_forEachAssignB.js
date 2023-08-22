class Employee {
    constructor (emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
const emp_vinayak = new Employee (88, "vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahi]
console.log(`------------------- step - 1 ------------------------`);
arrayEmployees.forEach((empObject) => {
if (empObject.emp_company == "TCS") {
    console.log(`${empObject.emp_name} : ${empObject.emp_company}`);
}
})
console.log(`------------------- step - 2 ------------------------`);
arrayEmployees.forEach((empObject) => {
    if (empObject.emp_dept == "Finance") {
        console.log(`${empObject.emp_dept} : ${empObject.emp_name}`);
    }
})
console.log(`------------------- step - 3 ------------------------`);
arrayEmployees.forEach((empObject) => {
    if (empObject.emp_name.startsWith("R") == true) {
        console.log(`Emp id : ${empObject.emp_id},  Name : ${empObject.emp_name},  Dept : ${empObject.emp_dept},  Salary : ${empObject.emp_salary},  Company : ${empObject.emp_company}`);
        
    }
})
console.log(`------------------- step - 4 ------------------------`);
arrayEmployees.forEach((empObject) => {
    if (empObject.emp_salary > 75000) {
        console.log(`${empObject.emp_name}, ${empObject.emp_company}, ${empObject.emp_salary}`);
    }
})
console.log(`------------------- step - 5 ------------------------`);
arrayEmployees.forEach((empObject) => {
    if (empObject.emp_dept == "IT" && empObject.emp_salary >= 50000) {
        console.log(`Emp id : ${empObject.emp_id},  Name : ${empObject.emp_name},  Dept : ${empObject.emp_dept},  Salary : ${empObject.emp_salary},  Company : ${empObject.emp_company}`);
        
    }
})
console.log(`------------------- step - 6 ------------------------`);
arrayEmployees.forEach((empObject) => {
    if (empObject.emp_company == "Infy") {
        console.log(`Emp id : ${empObject.emp_id},  Name : ${empObject.emp_name},  Dept : ${empObject.emp_dept},  Salary : ${empObject.emp_salary},  Company : ${empObject.emp_company}`);
    }
})
