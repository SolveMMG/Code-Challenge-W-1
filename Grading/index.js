//Importing readline module.
const readline= require("readline");
const getGrade = require("./grading");
//input is set and output is set .
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//function that get the input(marks) and converts it to a grade.
rl.question("Enter the student's mark (between 0 and 100): ", (mark) => {
    if (mark >= 0 && mark <= 100) {
        console.log(`Student's Grade: ${getGrade(mark)}`);
      } else {
        console.log("Invalid input. Number should be between 0 and 100");
      }
  rl.close();
});
