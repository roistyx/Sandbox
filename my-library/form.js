function submitForm(e){
    e.preventDefault();
    console. log ("Form is submited");
    const name = document.getElementById ("name" ).value;
    const email = document.getElementById("email") .value;
    const psw = document.getElementById("psw").value;
    console. log("name", name) ;
    console. log ("email", email);
    console. log ("psw", psw);
    }
window.onload = () => {
    const my_form = document.getElementById("my-form");
    my_form.addEventListener("submit", submitForm);
}

