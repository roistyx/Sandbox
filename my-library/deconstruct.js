const alphabet = ["a", "b",'c', "d", "e", "f"];
const myNumbers = ["1", "2",'3', "4", "5", "6"];

const [first,, third, ...rest] = alphabet;

console.log("Deconstructing", first, third, rest)

console.log("Combining two arrays", ...alphabet, ...myNumbers);

newArray = alphabet.concat(myNumbers);

console.log("Similar outcome as deconstructing the array", newArray)

console.log("---------------")

function sumAndMultiply (a, b) {
    return [a + b, a * b, a / b]
}

const [sumMe, multiply, devision = "No devision"] = sumAndMultiply(4, 5);

console.log(devision)

 
// const anObject = {
//     keyA: 'ValueA',
//     keyB: 'ValueB',
//     keyC: 'ValueC',
//     nested: {
//         nestedA: 'nestedValA',
//         nestedB: 'nestedValB',
//         anotherNested: {
//             multiNest: 'multiNest'
//         }
//     }
// }

// const {
//     keyA, 
//     keyB,
//     keyC, 
//     nested,
//     nested: {
//         nestedValA, nestedValB,
//         nestedValB: {multiNest}
//     }
// } = anObject;

// console.log(keyA, multiNest )


// const myArray = ['item1', 'item2', 'item3New', ['nestedItem1', 'nestedItem2']];

// const [itemOne, itemTwo, itemThree, [nestedOne, nestedTwo]] = myArray
// console.log(nestedOne)


// const yetAnotherObject = {
//     keyA:   'valueA',
//     keyB:   'valueB',
//     keyC:   'valueC'
// }
//     const object2 = {
//     name: 'Test',
//     country: 'US',
//     planet: 'Earth',
//     ...yetAnotherObject
//     }

//     console.log(object2)

// const myObject = {
//     keyA:   'valueA',
//     keyB:   'valueB',
    
//     myArrowFunction: () =>{
//         console.log(myObject.keyA)
//     },

//     myRegularFunction: function() {
//         console.log(this.keyA)
//     }
// }
// myObject.myArrowFunction()
// myObject.myRegularFunction()


