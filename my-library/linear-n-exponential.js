// This code compares two functions that run linear and exponential loops to show performance differences. And it features counting iterations and pushing to an array.

function linear_example (size) {
    let count =0;
    const my_array = [];
    for (let i = 0; i < size; i++){
        my_array.push(i);
        count++;
    }
    

    const a1 = performance.now()
    const a2 = performance.now();
    console.log ("Count linear", count);
    console.log("Time linear: ", a2 - a1);
}
linear_example (100000000)


function n_square_example(size){
    const my_array = [];
    for (let i = 0; i < size; i++) {
    my_array.push(i)};

    let count =0;
    
    const a1 = performance.now();
    
    my_array.forEach((item) => {  
        my_array. forEach((item2) => {
            count++
        });
    });
    console.log ("Count nSquare", count);
    const a2 = performance.now() ;
    console.log ("Time for nSquare:", a2 - a1);
}
    
   
    

    // n_square_example(100);
    n_square_example(10000);