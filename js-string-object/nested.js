const college ={
    name: 'vnc',
    class:['11', '12'],
    event:['science fair', 'victory day', '21 Feb'],
    unique:{
        color: 'blue',
        result:{
            gpa: 5,
            merit: 'top'
        }
    }
}
college.unique.result.merit = 'topmost'
console.log(college.unique.result.merit);
college.event[1] = '26 march'
console.log(college.event[1]);
delete college.class;
console.log(college);
