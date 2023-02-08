const num = [5, 10, 15, 20];
const over10 = num.filter(filterFunction);

function filterFunction(value) {
    return value > 10;
}

console.log(over10); // Output: [15, 20]