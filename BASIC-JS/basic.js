var Name = 'sohel';
var age = 45;
var isMale = true;
var x = null;
var y;
var num1 = 14.8796; //type of number
console.log(typeof(num1));
var num2 = 5;
var converted = num1.toFixed(3)// decimal point to be fixed
console.log(typeof(converted)); // string
console.log(num2 + parseFloat(converted));//behaviour change from string to number

// let notANum = isNaN("abc");
// console.log(typeof(isNaN("abc")));
var sunnyDay = false;
console.log(!sunnyDay);// ! it can opposite the value or boolean