function sum(a, b) {
    return a + b;
}

const sum2 = (a, b) => {
    return a + b;
}

const sum3 = (a, b) => a + b


const inPositine = number => number >= 0;


function isPositine(number) {
    return number >= 0;
}

function randomNumber() {
    return Math.random()
}

let randomNumber2 = () => {
    return Math.random()
}

const btn = document.getElementById('button')
btn.addEventListener('click', function(){
    console.log("I am a regular function!")
})

console.log(randomNumber())
console.log(randomNumber2())

btn.addEventListener('click', () => console.log("I am an arrow head function!"))


class Person {
    constructor( name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log("Arrow: " + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function(){
            console.log("Function: " + this.name)
        }, 100)
    }
}

const person = new Person ('Bob')

person.printNameArrow();
person.printNameFunction()


