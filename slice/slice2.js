const arr = [15, 60, 9, 100, 12, 1, 15, 9];

// find the smallest value:
const smallestVal = Math.min(...arr);

// find the index of the -smallest value:
const smallestIndexVal = arr.indexOf(smallestVal);

// remove the minimum value:
const newArr = arr.slice(0, smallestIndexVal);
const newArr2 = arr.slice(smallestIndexVal + 1);
const finalArr = newArr.concat(newArr2);
console.log(finalArr);
