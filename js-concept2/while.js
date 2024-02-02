for(let i = 1; i<7; i++){
    console.log('sohelDewan', i);
}

let allSum = 0;
for(let k=0; k<=7; k++){
    allSum += k;
}
console.log(allSum)

// const nums = [ 20, 40, 50, 70, 30];
// let sum = 0;
// for(let i=0; i<nums.length; i++){
//     // console.log(nums[i]);
//     sum += nums[i];
// }
// console.log(sum);

const arr = [23, 44, 54, 21, 53, 22, 12];
let sumOdd= 0, sumEven = 0;
for(let i= 0; i<arr.length; i++){
    let x = arr[i];
    if(x%2===0){
        sumEven += arr[i];
    }
    else{
        sumOdd += arr[i];
    }
}
console.log(sumEven);
console.log(sumOdd);
let sum = 0;
for(let item of arr){
    sum += item;
}
console.log(sum);