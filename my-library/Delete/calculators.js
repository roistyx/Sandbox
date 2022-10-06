// Create the following classes: Square, Triangle, Rectangle, Shape, Isosceles Triangle and Circle.

// Implement the following method for each class:
// area, circumference

class Square {
    constructor(width) {
        this.width = width;
    }

    calArea() {
        return this.width * this.width
    }

    calCircumference() {
        return this.width * 4
    }
}

const square = new Square (10)

console.log(square.calArea())
console.log(square.calCircumference())

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
        
    }

    calArea() {
        return (this.base/2) * this.height
    }

    calCircumference() {
        return this.base + this.height
    }
}

const triangle = new Triangle (17, 10)

console.log(triangle.calArea())
console.log(triangle.calCircumference())