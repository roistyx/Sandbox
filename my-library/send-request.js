const name_value = document.getElementById('name').value;
const email_value = document.getElementById('email').value;

const submit_object = {
    name: name_value,
    email: email_value,
};

send_POST_request (
    "https://630f59da37925634188d7eb8.mockapi.io/form/submit",
    submit_object
);

function send_POST_request(url, body){
    fetch(url,{
        method: "POST",
        headers: {"content-type": "application/json",
    },
    body: JSON.stringify(body)
    })
    .then((response) => {
        response.json((result) => {
            console.log(result)
        })
    })
    .catch((error) => {
        console.log(error)
    })

}
