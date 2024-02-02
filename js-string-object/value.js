const person ={
    name:"Shamim",
    age: 40,
    profession: 'Developer',
    salary: 25000,
    married: true,
    "favoutite places": ['bandorbon', 'kuakata', 'rangamati']
}
// how to change value
person.salary = 30000;
person['profession']= 'Software Engineer';
person["favoutite places"] = ['maldip', 'bali', 'pataya'];
const propName = 'profession';
person[propName] = 'DevOps'
// person.profession = "DevOps"; is another way of above two lines
console.log(person);