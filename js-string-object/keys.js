const computer ={
    brand: 'lenevo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb',
    monitor: 'hp'
}
// how to find out the keys or values of an object

const keys = Object.keys(computer);
const value = Object.values(computer);
console.log(keys.length);
console.log(value);