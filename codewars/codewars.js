function bmi(weight, height) {
    const bmi = weight / (height * height)
    switch (true) {
        case bmi <= 18.5:
            return "Underweight";
        case bmi <= 25.0:
            return "Normal";
        case bmi <= 30.0:
            return "Overweight";
        default:
            return "Obese";
    }
}

console.log(bmi(70, 2))

function fruitFunc(fruit) {
    switch (true) {
        case fruit === "apple":
            return "I love apples!";
            break;
        case fruit === "banana":
            return "Bananas are great for smoothies.";
            break;
        case fruit === "orange":
            return "Oranges are my favorite fruit.";
            break;
        default:
            return "I'm not a fan of that fruit.";
    }
}

console.log(fruitFunc("banana"));