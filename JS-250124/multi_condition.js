const salary = 25000;
const isBcs = true;
const height = 70;

// if(salary > 20000 && height > 66){
//     console.log("Okay for marriage")
// } else{
//     console.log("consts find another")
// }
// if (salary > 25000 || height >72 || isBcs){
//     console.log("agreed")
// }else{
//     console.log('not okay')
// }
// -----------COMPLEX CONDITION------------
// if ((salary > 25000 || height >72) && isBcs){
//     console.log("agreed")
// }else{
//     console.log('not okay')
// }
// if ((salary > 25000 && height >72) || isBcs){
//     console.log("agreed")
// }else{
//     console.log('not okay')
// }
// -----------COMPLEX CONDITION of if else------------
const price =2000;

if(price>=5000){
    //discount 10%;
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log(payAmount);
} else if(price>3000){
    //discount 5%
    const discount = price * 5/100;
    const payAmount = price - discount;
    console.log(payAmount);
} else{
    const payAmount = price;
    console.log(payAmount);
}