//Importing readline module.
const readline= require("readline");
const getPoints = require("./Speeding");
//input is set and output is set .
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//function that gets the speed of the car to return the demerit points.
