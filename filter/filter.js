const num = [5, 10, 15, 20];

const filterFunction = (value) => value > 10;
const over10 = num.filter(filterFunction);

console.log(over10);