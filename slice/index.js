// * Given an array of integers, remove the smallest value. Do not mutate the original array/list.
// * If there are multiple elements with the same value, remove the one with a lower index.
// * If you get an empty array/list, return an empty array/list.

const arr = [2, 2, 1, 2, 1];
const min = Math.min(...arr);
const indexMin = arr.indexOf(min);

const newArr = arr.slice(0, indexMin);
const newArr2 = arr.slice(indexMin + 1, arr.length);
const newArr3 = newArr.concat(newArr2);

console.log(newArr);
console.log(newArr2);
