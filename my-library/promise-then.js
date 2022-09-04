function form_submit (e){
    e.preventDefault();
    
    const name_value = document.getElementById('name');
    const email_value = document.getElementById('email');
}


function set_HTTP_request (url) {
    
    fetch(url)
        .then((response) => {
            response.json()
                .then((result) =>{
                    result.forEach((item) => {
                        add_item (item, list_container)
                    })
            // console.log(result);
            document.getElementById("conatiner").innerHTML = JSON.parse.result
        })
        .catch((error) => {console.log(error);})
        
    });
    
};

function add_item (item, parent_container) {
    const an_element = document.createElement("div");
    an_element.innerHTML.append(an_element);
    parent_container.append(an_element);

}


function init() {
    const my_form = document.getElementById('my-form');
    my_form.addEventListener('submit', form_submit);
    set_HTTP_request('https://630f59da37925634188d7eb8.mockapi.io/form/list')
    

}

window.onload = () => {
    init()
}