let numbers = [20, 3, 50, 7, 9];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

// let max = Math.max(...numbers);
console.log(max);
