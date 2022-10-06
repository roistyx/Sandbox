// This file demostrate different functions
// It also shows how method declarations and expression (arrowheads) behave in classes and objects: 
// In classes instances, Arrowhead inside function declaration "this.name" e.g, will print the name, while Function declaration inside function declaration will not.  
// In objects, function declaration "this" will refer to the object, while in arrowhead "this" will refer to the parent object (usually the "window" object)

function sum(a, b) {                        // Function declaration
    return a + b;
}

const sum2 = (a, b) => {                    // Function Expression (Arrowhead)
    return a + b;
}

const sum3 = (a, b) => a + b                // Arrow Functions

function isPositive(number) {               // Original function declaration
    return number >= 0;
}

const inPositine = number => number >= 0;   // The Arrow function version

function randomNumber() {                   // Original function declaration
    return Math.random()
}

let randomNumber2 = () => {                 // The Arrowhead function version
    return Math.random()
}

const btn = document.getElementById('button')
btn.addEventListener('click', function(){
    console.log("I am a regular function!")
})

console.log(randomNumber())
console.log(randomNumber2())

btn.addEventListener('click', () => console.log("I am an arrow head function!"));

class Person {
    constructor( name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log("Arrow inside function declaration: " + this.name)
        }, 100);
    }

    anotherArrowFunction = () => {
        console.log("Arrow function: " + this.name);
    }

    printNameFunction() {
        // console.log("Regular function: " + this.name)
        setTimeout(function(){
            console.log("Function declaration inside function declaration: " + this.name)
        }, 100);
        
        
    }

    hello = (myVal) =>"Another arrow function: " + this.name + " " + myVal;
}

const person = new Person ('Bob')

person.printNameArrow();
person.anotherArrowFunction();
person.printNameFunction()
console.log(person.hello("Moshe"))

const myObj = {
    accupation: "Astronaut",

    printMyRegularFunction: function(){
        console.log("Regular Function", this);
    },

    printMyArrowFunction: () =>  {
        console.log("Arrow Function", this);
    }

}

myObj.printMyRegularFunction()
myObj.printMyArrowFunction()

