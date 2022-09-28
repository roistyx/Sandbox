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

const myObject = {
    keyA:   'valueA',
    keyB:   'valueB',
    
    myArrowFunction: () =>{
        console.log(myObject.keyA)
    },

    myRegularFunction: function() {
        console.log(this.keyA)
    }
}
myObject.myArrowFunction()
myObject.myRegularFunction()


