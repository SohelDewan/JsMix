const person ={
    name:"Shamim",
    age: 40,
    profession: 'Developer',
    salary: 25000,
    married: true,
    "favoutite places": ['bandorbon', 'kuakata', 'rangamati']
}
// dot notation 'sometime dot may change with property name'
console.log(person.profession);
const income = person.salary;
console.log(income);

// bracket notation is easy to access and change
// console.log(person['age']);

const years = person['age'];
console.log(years);
console.log(person["favoutite places"]);