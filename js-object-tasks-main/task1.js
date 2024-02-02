const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
// Access the `golden rod` color value in output.
console.log(colors["golden rod"]);
// ### task-2 For this object below add a property named `passenger capacity` with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car["passernger capacity"] = 5;
// console.log(car);

//### Task-3 Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);

// ### Task-4 Count the `number of properties`.
let studentInfo = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// let numProperties = Object.keys(studentInfo).length;

// console.log(numProperties);
//### Task-5 (Hard) Loop through an object and print the key-value pairs with their `types`
// Here, myObject is the name of the object you want to loop through. The Object.entries() method returns an array of the object’s own enumerable string-keyed property [key, value] pairs, which you can then iterate over using a for...of loop. The typeof operator returns a string indicating the type of the operand.

// For example, to loop through the myObject object and print the key-value pairs with their types, you can do it like this:
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

    for( let [key, value] of Object.entries(myObject)){
        console.log(`Key: ${key} : ${value} || ${typeof value}`);
    }
    // for (const [key, value] of Object.entries(myObject)) {
    //     console.log(`key: ${key} | type: ${typeof value}`);
    //   }

//       **Output:**
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean