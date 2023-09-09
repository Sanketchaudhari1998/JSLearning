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
  console.log(`---------- find all the employees from wipro company ----------`);
  let empWipro = arrayEmployees.filter((employee)=>{
    return employee.emp_company === 'Wipro';
  })
  empWipro.forEach(element => {
    console.log(element);
  });

  console.log(`---------- find all the employees from IT or HR department ----------`);
  let dept_It_Hr = arrayEmployees.filter((employee)=>{
    return employee.emp_dept =='IT' || employee.emp_dept =='HR';
  })
  dept_It_Hr.forEach(element => {
    console.log(element);
  });
  console.log(`---------- find all the employees whose id greater than 50 ----------`);
  let greater50 = arrayEmployees.filter((employee)=>{
    return employee.emp_id > 50;
  })
  greater50.forEach(element => {
    console.log(element);
  });
  console.log(`---------- employees whose name starts with "A", "V", "M" ----------`);
  let nameStartWith = arrayEmployees.filter((employee)=>{
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M");

  })
  nameStartWith.forEach(element => {
    console.log(element);
  });
  console.log(`---------- Average salary of the employees for all departments ----------`);
let salary = arrayEmployees.map((employee)=>{
return employee.emp_salary;
});
let avgSalary = salary.reduce((runningTotal, currentElement)=>{
    return runningTotal+currentElement;
});
console.log(avgSalary/salary.length);
console.log(`---------- Average salary of the employees for IT departments ----------`);
let dept_It = arrayEmployees.filter((employee)=>{
    return employee.emp_dept =='IT';
  });
  let dept_ItSalary = dept_It.map((employee)=>{
    return employee.emp_salary;
  });
  let dept_ItSalaryAvg = dept_ItSalary.reduce((runningTotal, currentElement)=>{
    return runningTotal+currentElement;
  });
  console.log(dept_ItSalaryAvg/dept_ItSalary.length);


