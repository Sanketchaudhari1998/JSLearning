class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  let arrayEmployees = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];

  const employeeTcs = arrayEmployees.filter((employee)=> {
    return employee.emp_company==='TCS';
  });
  console.log(employeeTcs);
  for (const employee of employeeTcs) {
    console.log(`Company Name: ${employee.emp_company}, Employee Name: ${employee.emp_name}`);
  }

  console.log("===== Find the TCS employees and get the list of employee names only ======");
  const tcsEmployees = arrayEmployees.filter((employee)=> {
    return employee.emp_company==='TCS';
  });
  const employeeTcsNames = tcsEmployees.map((employee)=> {
    return employee.emp_name;
  });
  console.log(employeeTcsNames);

  console.log(`***************************`);
  arrayEmployees.filter(employee=> employee.emp_company==='TCS')
  .map(employee =>  employee.emp_name)
  .forEach(empName => console.log(empName));

  console.log(`------------- Average salary of employees from wipro company ------------`);
  const empWipro = arrayEmployees.filter((emp) => {
    return emp.emp_company === 'Wipro'
  })
  let avgSalary= empWipro.map((employee)=>{
    return employee.emp_salary
  })
  let sum =0;
 avgSalary.forEach(element => {
  sum = sum + element;
 });
 console.log(sum/avgSalary.length);

 console.log(`------------- Average salary of employees from wipro and infy ------------`);
 const empWiproInfy = arrayEmployees.filter((emp) => {
  return emp.emp_company === 'Wipro' || emp.emp_company === 'Infy'
})
let avgSalary2= empWiproInfy.map((employee)=>{
  return employee.emp_salary
})
let sum2 =0;
avgSalary2.forEach(element => {
sum2 = sum2 + element;
});
console.log(sum2/avgSalary2.length);