const baseUrl = 'http://localhost:5050/fibonacci/'
const fibobnacciAnswer = document.getElementById('fib-num');
const checkBox = document.getElementById('flexCheckDefault');
let indexNumber = document.getElementById('index')
const errorGreaterThan50 = document.getElementById('greater-than-50-error');
const resultsSpinner = document.getElementById('spinner-box');

indexNumber.addEventListener('click', () => {
  indexNumber.value = null
});
checkBox.addEventListener('change', (e) => {
  fibobnacciAnswer.innerHTML = null
    if (e.target.checked == true) {
      return checkBox.checked 
    } else {
      return checkBox.checked 
    };
  });

function submitForm(e){
  e.preventDefault();
  if (indexNumber.value > 0){
    if (checkBox.checked == true) {
      serverFibonacciCal(indexNumber.value);
      } else {
      localFibonacciCal(indexNumber.value);
      };
  };
};


let i;
let fib = [0, 1]; 
function localFibonacciCal(x_value) {
  for (i = 2; i <= x_value; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  fibobnacciAnswer.innerHTML = fib[i]
  errorGreaterThan50.classList.add('d-none');
  };
};

async function serverFibonacciCal(indexNumber) {
  const url =baseUrl+indexNumber
  const serverError42 = document.getElementById('error-42');
  fibobnacciAnswer.innerHTML = '';
  serverError42.innerHTML = '';
  errorGreaterThan50.classList.add('d-none');

  if (url == baseUrl ) {
    return;

  } else if (indexNumber <= 50) {
      spinnerOn (fibobnacciAnswer)

    try {const response = await fetch(url);
      const data = await response.json();
      const serverFibonacciResult = Object.values(data)[1];
      fibobnacciAnswer.innerHTML = serverFibonacciResult;
      getFibonacciResults()
    } 
    catch(error) {
      fibobnacciAnswer.innerHTML = '';
      if (indexNumber == 42);
      serverError42.innerText = 'Server Error: 42 is the meaning of life';
    }; 
  } else {
    const errorColorOn = '#D9534F';
    const errorColorOff = '#373A3C';
    const indexInputElement = document.getElementById('index');
    errorGreaterThan50.classList.remove('d-none');
    changeInputColors(errorColorOn);

    indexInputElement.addEventListener('click', () => {
      changeInputColors(errorColorOff);
    });
  };
};

window.onload = () => {
  const serverFibonacciCal = document.getElementById('fib-cal');
  serverFibonacciCal.addEventListener('submit', submitForm);
  getFibonacciResults();
};
  
function changeInputColors (errorColor) {
  const inputElement = document.querySelector('#index').style;
  inputElement.borderColor = errorColor;
  inputElement.color = errorColor;  
};


async function getFibonacciResults() {
  url = 'http://localhost:5050/getFibonacciResults';
    try {const response = await fetch(url);
      spinnerOn (resultsSpinner); 
      const data = await response.json();
      const FibonacciIndex = Object.values(data)[0];
      FibonacciIndex.forEach((item, index) =>{
        const itemLine = document.createElement('div');
        const serverDates = convertTimestamp(item.createdDate);
        itemLine.innerHTML = `The Fibonacci Of <strong>${item.number}</strong> is <strong>${item.result}</strong>. Calculated at: ${serverDates}`;
        document.getElementById('server-results').appendChild(itemLine).classList.add('result-item');
        spinnerOff();
      });
    }
    catch(error) {
      console.log(error);
    }; 
  };

  function convertTimestamp (fibonacciCalTimestamp) {
    var fibonacciCalTimestamp = new Date(parseInt(fibonacciCalTimestamp));
    return fibonacciCalTimestamp.toString();
}


function spinnerOn (x) {
  return x.innerHTML = `<div class="spinner-border rounded-circle"role="status"></div>`;
}

function spinnerOff () {
  return resultsSpinner.innerHTML = '';
}



