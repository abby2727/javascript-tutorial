let text = 
    '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

console.log(JSON.parse(text))

// const text2 = '[ "Ford", "BMW", "Audi", "Fiat" ]';
// const obj = JSON.parse(text2);
// console.log(obj[2]);