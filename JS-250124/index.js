// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

// var cashInhand = 1000;
// var orangesPrice =400;
// var applesPrice =300;
// var returnMoney = cashInhand - orangesPrice - applesPrice;
// console.log(returnMoney);
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
let numbers = [75.25, 65, 80, 35.45, 99.50];
const sum = numbers.reduce((a, b) => a + b, 0);
const average = sum / 5;
console.log(average.toFixed(3));

// let givenNum = 113;
// let divider = 5;
// let reminder= givenNum % divider;
// console.log(reminder);
// What is the output of the following code?

let x = 5; if (x < 10) { x = x + 3; } else { x = x - 2; } console.log(x);
