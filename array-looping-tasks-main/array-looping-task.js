const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// for(let n=colors.length-1; n>=0; n--){
//     let reversed = [];
//     // console.log(colors[n]);
//     reversed.push(colors[n]);
//     // console.log(reversed);
// }
let unshiftColors = [];
for(const num of colors){
    // console.log(num);
    unshiftColors.unshift(num);
}
// let rev_colors = colors.unshift();
console.log(unshiftColors);

for(let i=0; i<colors.length; i++){
    let nums = colors[i];
    unshiftColors.unshift(nums);
}
console.log(unshiftColors);
