let text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

// ? Data written as an JSON array will be parsed into a JavaScript array.
const text2 = '[ "Ford", "BMW", "Audi", "Fiat" ]';

// Convert the string into a JavaScript object
const obj = JSON.parse(text2); 

// console.log(obj);
console.log(obj[2]);