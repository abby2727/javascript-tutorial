const nestedArray = [1, 2, [3, 4], 5];

const [one, two, [three, four], five] = nestedArray;
console.log(one, two, three, four, five)