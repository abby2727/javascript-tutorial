function multiply(a, b, c) {
    return a * b * c
}

const num = [2, 2, 2];
console.log(multiply(...num))

// * without spread
// console.log(multiply.apply(null, num))