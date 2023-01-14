function countSeven() {
    let count = 0;
    for (let i = 0; i <= 30; i++) {
        let digits = i.toString().split('');
        // count += digits.filter(d => d === '7').length;
        count = count + digits.filter(d => d === '7').length;
    }
    console.log(count);
}

countSeven();