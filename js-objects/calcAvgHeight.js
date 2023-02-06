function Person(h, w) {
    this.height = h;
    this.weight = w;
}

// Output
console.log(calcAvgHeight(
    {
        Matt: { height: 174, weight: 69 },
        Jason: { height: 190, weight: 103 }
    }
));

// Output
// const Matt = new Person(174, 69);
// const Jason = new Person(190, 103);

// const data = {
//     Matt,
//     Jason
// };

// Calculate average height from received data. If no data, return null.
function calcAvgHeight(data) {
    if (!data) {
        return null;
    }
    let totalHeight = 0;
    let count = 0;
    for (const person in data) {
        totalHeight += data[person].height;
        count++;
    }
    return totalHeight / count;
}