const employees = [
    { id: 15, empName: 'John', dept: 'Support' },
    { id: 10, empName: 'Max', dept: 'IT' },
    { id: 12, empName: 'Bella', dept: 'Support' },
    { id: 19, empName: 'Amelia', dept: 'IT' },
    { id: 19, empName: 'Robert', dept: 'IT' },
]

const onlyITEmployees = employees.filter((val) => val.dept == 'IT');

console.log(onlyITEmployees);

// for (let emp in onlyITEmployees) {
//     console.log(typeof onlyITEmployees[emp].empName);
// }
