window.onload = () => {
  const fib_cal = document.getElementById("fib-cal");
  fib_cal.addEventListener("submit", submitForm);
}

function submitForm(e){
  e.preventDefault();
  console. log ("Form is submited");
  const x_value = document.getElementById ("index" ).value;
  console. log("Index", x_value ) ;
  fib_cal(x_value)
  }
  


var i;
var fib = [0, 1]; 
function fib_cal(x_value) {
  if (x_value == 42) {
    console.log(x_value, 'Is not acceptable')
  } else {
    for (i = 2; i <= x_value; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log('Index:', i);
    console.log('The fibonacci of ', i, 'is ', fib[i]);
    printing_fib()
      }
  }
      
}


function printing_fib() {
  const fib_x = document.getElementById("index");
  // fib_x.innerHTML = i;
  const fib_num = document.getElementById("fib-num");
  fib_num.innerHTML = fib[i]
}



