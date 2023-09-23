//Importing readline module.
const readline= require("readline");


//Importing arrays and functions
const fA = require("./salary")


//input is set and output is set .
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//function prompt the user to enter their BasicSalary, Pension and Benefits. 
rl.question("Enter your BasicSalary, Pension, and Benefits (comma-separated): ", (input) => {
    const [BasicSalary, Pension, Benefits] = input.split(',').map(value => parseFloat(value));
   fA.netIncome(BasicSalary,Pension,Benefits);   //Function to calculate net income
   const salaryDetails = fA.netIncome(BasicSalary, Pension ,Benefits);
   console.log("Gross Salary:", salaryDetails.grossSalary);
   console.log("Tax (Payee):", salaryDetails.tax);
   console.log("NHIF Deductions:", salaryDetails.NhifDeduction);
   console.log("NSSF Deductions:", salaryDetails.NssfDeduction);
   console.log("Net Salary:", salaryDetails.NetSalary);         
  rl.close();
});

