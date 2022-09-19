
// A fetch function that passes a number to calculate a Fibonacci number remotely and displays a loading and error message.
    
const fib_answer = document.getElementById('output-div');
async function fib_cal(x_value) {
    if (x_value < 50) {
        fib_answer.innerHTML = "Loading...";

    try {const response = await fetch(`http://localhost:5050/fibonacci/${x_value}`);
    const data = await response.json();
    // fivonacci_object = JSON.stringify(data);
    const fib_result = Object.values(data)[1];
    fib_answer.innerHTML = fib_result;
    console.log(fib_result);

} 
catch(error) {
    fib_answer.innerHTML = error;
};  
    } else {
        fib_answer.innerHTML = "Not valid";
    }
};


fib_cal(12)

