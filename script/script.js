var form_submit = document.getElementById('form-submit');
// console.log(form_submit.id);
form_submit.addEventListener("click", get_result);

    function get_result(){
    var x_value = document.getElementById('x-value');
    var feedback = document.getElementById('feedback');
    feedback.innerHTML = x_value.value;

    // console.log(x_value.value);
    
      // document.getElementById("result").innerHTML = "Enter number";
    }
    
    
