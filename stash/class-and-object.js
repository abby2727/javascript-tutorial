class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar = new Car("Ford", 2014);
const myCar2 = new Car("Lamborghini", 2023);

console.log(myCar.name + " " + myCar.year);
console.log(myCar2.name + " " + myCar2.year);
