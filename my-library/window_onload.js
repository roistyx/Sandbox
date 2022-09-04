function form_submit(e){
    e.preventDefault();
    console.log("Form Submit");
}

window.onload = () => {
console. log ("Page is done loading");
const my_form = document.getElementById ("my-form");
my_form.addEventListener("submit", form_submit);

}