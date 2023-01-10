// Reduce Activity in Loops
// Statements or assignments that can be placed outside the loop will make the loop run faster.

// Bad:
for (let i = 0; i < arr.length; i++) {
    // ...
}

// Better Code:
let l = arr.length;
for (let i = 0; i < l; i++) {
    // ...
}