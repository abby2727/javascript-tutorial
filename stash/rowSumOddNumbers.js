function sumTriangleRow(n) {
    let lastNum = 1;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            sum += lastNum;
            lastNum += 2;
        }
    }
    return sum - lastNum + 2;
}

console.log(sumTriangleRow(2));