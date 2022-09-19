const textValue = document.getElementById('text');
textValue.addEventListener('mouseover', (event) => {
    console.log(textValue);
});


function myFunction() {
  alert("The value of the input field was changed.");
}


///

// const input = document.querySelector('input');
const input = document.getElementById('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  console.log("caca")
}