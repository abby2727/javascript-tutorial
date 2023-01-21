function sumAll() {
    const array = [5, 10, 15, 30];
    let sum = 0;

    // for (let i = 0; i < array.length; i++) {
    //     sum += array[i];
    // }

    array.forEach(function (value) {
        sum += value;  // value == array[i]
    });
    
    console.log(sum);
}

sumAll();