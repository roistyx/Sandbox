// var result  = document.getElementById ('result');
var x_value = document.getElementById ('x_value');



// result.innerHTML = x_value.value; 
// console.log(x_value.value)



document.getElementById("submit_value_x").addEventListener("click", get_result);

function get_result() {
  x_parsed = (x_value.value)
  // x_int = parseInt(x_value.value,10)
  x_int = (1*(x_value.value))
  console.log(typeof  x_int)
    // document.getElementById("result").innerHTML = (x_parsed);
    if (isNaN(x_int)){
      // document.getElementById("result").innerHTML = "Enter number";
      alert ("Enter number")
    } if (x_int>50) {
      alert ("Can't be greater than 50")
    }
    if (x_int===42)
    alert ("Server Error: 42 is the meaning of life")
  
    else {
      f_number = ((x_int-1)+(x_int-2))

      document.getElementById("result").innerHTML = (f_number);
    }
    
}



// function get_result() {
//   x_value = parseInt(x_value.value,10)
//   // console.log(typeof  x_value)
//   if (isNaN(x_value)){
    
//     document.getElementById("result").innerHTML = "Enter number";

//   } else {
//     document.getElementById("result").innerHTML = (x_value);
//   }

// }



