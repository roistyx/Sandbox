class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStatus () {
        return `This car has ${this.doors} doors, and a ${this.engine}, and it's colored ${this.color}`
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;
        console.log(doors1)
        console.log(doors2)

        return doors1 + doors2;
    }
} 


const cx5 = new Car(4, 'V600', 'green')
const Civic = new Car(3, 'T500', 'blue')

console.log(cx5.carStatus())
console.log(Car.totalDoors(cx5, Civic))