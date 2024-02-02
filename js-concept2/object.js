
const myPet = {
    name:"Traves",
    age: 2,
    isMale:true,
    food: 'fish',
    color : 'white',
    species: 'Hulu biral'
}
let catColor = myPet['color']
// console.log(catColor);
// How to change a property value
myPet.isMale = false;
// How to add a new property value as like as change
myPet.sound = 'mew mew';
// How to delete a property value as like as change

delete myPet.age;
// how to iterate all property keys
for(let key in myPet)
// console.log(key, typeof key)
// how to find all values of the object

console.log(myPet[key]);

const student ={
    name:{
        firstName: "Mohammad",
        middleName: "Sohel",
        lastName: "Dewan"
    },
    subject:["Physics", "chemistry", "Math"],
    id: 330,
    class: 12,
    isMale: true,
    age : 20
}
console.log(student.name.middleName);
console.log(student.subject[2]);