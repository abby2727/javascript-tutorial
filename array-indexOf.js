const fruits = ["Apple", "Orange", "Apple", "Mango"];
const position = "Orange"

if (fruits.indexOf(position) === -1) {    // return -1 if not found
    console.log("Not found");
} else {
    console.log("Index: " + fruits.indexOf(position));
}