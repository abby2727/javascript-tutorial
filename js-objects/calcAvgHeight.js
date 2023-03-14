function calcAvgHeight(data) {
    if (!data) {
        return null;
    }
    let totalHeight = 0, count = 0;
    for (const person in data) {
        totalHeight += data[person].height;
        count++;
    }
    return totalHeight / count;
}

console.log(calcAvgHeight({
    Matt: { height: 174, weight: 69 },
    Jason: { height: 190, weight: 103 },
    John: { height: 160, weight: 103 },
}));