function looping() {
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j < i; j++) {
            console.log('j: ' + j);
        }
    }
}

looping();