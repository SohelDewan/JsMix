const country = 'Bangladesh';
const division = "Sylhet";
const district = `sylhet`;
const thana = new String('Airport');
console.log(country[7]);// string is immutable

const numbers = [2,5,8,12,34,32,41]; // array is mutable
numbers[1]=11;
console.log(numbers);

const str = "Hello";
str[0] = "h";
console.log(str);