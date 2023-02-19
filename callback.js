let one = (callback) => {
    console.log('I am one!');
    callback('two!');
}

let two = (text) => {
    console.log('I am ' + text);
}

one(two);