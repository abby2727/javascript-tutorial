const array = [1, 2, 2, 3, 3, 4];
const duplicates = [];

array.forEach(function (value) {
    if (array.indexOf(value) !== array.lastIndexOf(value)) {
        if (!duplicates.includes(value)) {
            duplicates.push(value);
        }
    }
});

console.log(duplicates);

// function findDuplicates(arr) {
//     const duplicates = [];

//     arr.forEach(function (value) {
//         if (arr.indexOf(value) !== arr.lastIndexOf(value)) {
//             if (!duplicates.includes(value)) {
//                 duplicates.push(value);
//             }
//         }
//     });

//     console.log(duplicates);
// }

// findDuplicates([1, 2, 2, 3, 4]);