// const age = 10;

// age >= 18? console.log("You can be a voter") : console.log("Age is not enough");
// condition ? true : false; This is the ternary if condition structure

const price = 400;
const isLeader = false ;

// const newprice = isLeader === true ? 0 : price + 100 ;
// console.log(newprice);

// if(price > 1000 && isLeader === true){
//     console.log(price/2);
// }
// else if (price <1000 && isLeader === true){
//     console.log('No payment')
// }
// else{
//     console.log(price + 300);
// }
price > 1000 && isLeader === true ? console.log(price/2)
         : price <1000 && isLeader === true ? console.log('No payment') :console.log(price + 300);