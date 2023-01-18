function executeNestedLoop() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < i; j++) {
            console.log(j);
        }
    }
}

executeNestedLoop();

// Output
/*
    0

    0
    1

    0
    1
    2

    0
    1
    2
    3
*/