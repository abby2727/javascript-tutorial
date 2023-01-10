try {
    const person = '{"firstName":"John", "lastName":"Doe", "age":46}';
    // const obj = typeof JSON.parse(person);
    const obj = JSON.parse(person);

    console.log(obj.firstName);
} catch (error) {
    console.log(error);
}