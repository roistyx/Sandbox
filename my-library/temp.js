// function linearExample() {
// const myArr = [];
// for (let i = 0; i < 1000; i++) {
// myArr.push(i);
// }
// const a1 = performance.now();
// }
// linearExample();


function linear_example(){
    const myArray = [];
    for (let i = 0; i < 1000; i++) {
    myArray.push(i);
    }
    const a1 = performance.now();
    myArray.forEach((item) => {
    console.log(item);
    });
    const a2 = performance.now() ;
    console.log ("Time: ", a2 - a1);
    }

    linear_example()