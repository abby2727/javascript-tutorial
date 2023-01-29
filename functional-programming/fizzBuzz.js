function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {  // if divisible by 3 and 5
            // return "FizzBuzz";
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {  // if divisible by 3
            // return "Fizz";
            console.log("Fizz");
        } else if (i % 5 === 0) {  // if divisible by 5
            // return "Buzz";
            console.log("Buzz");
        } else {
            // return i;
            console.log(i);
        }
    }
}

// console.log(fizzBuzz());
fizzBuzz();