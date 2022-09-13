
// A fetch function that passes a number to calculate a Fibonacci number remotely and displays a loading and error message.
    
const fib_result = document.getElementById('output-div');
const output_div = document.getElementById('output-div');
async function fib_cal(x_value) {
    if (x_value < 50) {
    output_div.innerHTML = "Loading...";

    try {const response = await fetch(`http://localhost:5050/fibonacci/${x_value}`);
    const data = await response.json();
    // fivonacci_object = JSON.stringify(data);
    const my_array = Object.values(data);
    fib_result.innerHTML = my_array[1];
    console.log(my_array[1]);

} 
catch(error) {
    output_div.innerHTML = error;
};  
    } else {
        output_div.innerHTML = "Not valid";
    }
};


fib_cal(42)

