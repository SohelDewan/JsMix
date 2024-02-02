const persons = ['sakib', 'baju', 'kaju', 'cuju'];
console.log(persons.sort());
let nums = [
    7, 62, 5, 44,
    35, 2, 1
  ]

  console.log(nums.sort());// it will not work as it compares like string
  let num_sort = nums.sort(function(a,b) {return a-b;});
  let num_sort_dec = [...nums].sort(function(a,b) {return b-a;});
  console.log(num_sort);
  console.log(num_sort_dec);
