const person = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    gender: "male",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    get ageGender() {
        return this.gender + " " + this.age;
    }
};

for (let x in person) {
    console.log(person[x]);
}
