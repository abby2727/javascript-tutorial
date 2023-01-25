// const numbers = [45, 4, 9, 16, 25];

// for (let x in numbers) {
//     console.log(numbers[x]);
// }

// Working with JSON

const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);

// console.log(myObj.name);
// return false;

for (const x in myObj) {
    // console.log(x);         // name, age, car
    console.log(myObj[x]); // John, 30, null
}