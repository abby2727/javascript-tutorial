let text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

// Convert the string into a JavaScript object
const obj = JSON.parse(text);

console.log(obj);
// console.log(obj.employees[0].firstName);