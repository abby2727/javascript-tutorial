const employees = [
    { id: 15, empName: 'John', dept: 'Support' },
    { id: 10, empName: 'Max', dept: 'IT' },
    { id: 12, empName: 'Bella', dept: 'Support' },
    { id: 19, empName: 'Amelia', dept: 'IT' },
    { id: 19, empName: 'Robert', dept: 'IT' },
]

// * Display employees dept
// for (const employee in employees) {
//     console.log(employees[employee].dept);
// }

// * Display employees with the IT dept only
// let onlyITEmployees = employees.filter(e => e.dept == 'IT');
let onlyITEmployees = employees.filter(function (e) {
    return e.dept == 'IT';
});

for (let emp in onlyITEmployees) {
    console.log(onlyITEmployees[emp].empName);
}