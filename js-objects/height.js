function Person(h, w) {
    this.height = h;
    this.weight = w;
}

function calcAvgHeight(data) {
    let disp = document.getElementById('demo');
    let text = "";
    // for (const person in data) {
    //     console.log(data[person].height);
    //     text += data[person].height + "<br/>";
    // }
    // disp.innerHTML = text;

    let heights = [];
    for (const person in data) {
        heights.push(data[person].height);
        text += data[person].height + "<br/>";
    }
    // return heights;
    disp.innerHTML = text;
}

console.log(calcAvgHeight(
    {
        Matt: { height: 174, weight: 69 },
        Jason: { height: 190, weight: 103 }
    }
));

// calcAvgHeight(
//     {
//         Matt: { height: 174, weight: 69 },
//         Jason: { height: 190, weight: 103 }
//     }
// );