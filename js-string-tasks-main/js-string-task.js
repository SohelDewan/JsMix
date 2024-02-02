// ### Task-1: Count how many times a string has the letter `a`

let str = 'banana';
console.log(str.split('a').length -1);
let theString = 'responsibilities';
console.log(theString.split('i').length-1);

const myString = "This is a sample string with A's and a's.";
const count = (myString.match(/a/gi) || []).length;
console.log(`The string has ${count} 'a's or 'A's.`);

const vowels = ['a', 'e', 'i', 'o', 'u'];
const hasAllVowels = vowels.every(vowel => myString.toLowerCase().includes(vowel));
console.log(`The string ${hasAllVowels ? 'contains' : 'does not contain'} all the vowels a, e, i, o, u.`);
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
const myStr = "extrem Examination";
const newXString = myStr.replace(/x/g, 'y').replace(/X/g, 'Y');
console.log(`The new string is: ${newXString}`);

//Capitalize Every first Letter of each word in a String
const wordString = "this is a sample string.";
const capitalizedString = wordString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(`The new string is: ${capitalizedString}`);

