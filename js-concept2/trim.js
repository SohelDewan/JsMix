const x = ' Hello world ';
const y = 'hello World ';
if (x.trim().toLowerCase()===y.trim().toLowerCase()){
    console.log('Both are same');
}else{
    console.log("They are different");
}
// trim function does the delete of empty space of both side of a word