const numbers = [1,2,3,4,5,6,7];
// console.log(numbers);
// numbers.reverse();
// let reversed = numbers.reverse();
// console.log(numbers);
const rev_numbers = [];
for(const num of numbers){
    // console.log(num);
    rev_numbers.unshift(num); //another way to reverse
}
// console.log(rev_numbers);

// another
const reversed_num = [];
// for(let i=0; i<numbers.length; i++){
//     const num = numbers[i];
//     reversed_num.unshift(num);
// }
// console.log(reversed_num);

// reverse side
for(let i = numbers.length-1; i>=0; i--){
    let num = (numbers[i]);
    console.log(num);
    reversed_num.push(num);
}
console.log(reversed_num);

