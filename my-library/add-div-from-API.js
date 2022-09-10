window.onload = () => {
    console.log("I was on loaded")
    get_data("https://jsonplaceholder.typicode.com/comments");
    
};

// *** Async fetch function ***
async function get_data(url) {
    const container_ref = document.getElementById('comments-container');
    container_ref.innerHTML = "Loading...";

    try {
       const response = await fetch(url);
       console.log("Response",response)
       const result = await response.json();

       container_ref.innerHTML = "";
    
   
       result.forEach((object) => {
       add_comment(container_ref, object)
    
    });

    const comments = document.getElementsByClassName('comment-box');
    for (let comment_box of comments) {
        comment_box.addEventListener('click', (event) =>{
            const clicked_comment_box = event.currentTarget;
            const description_element = clicked_comment_box.childNodes[2];
            console.log ("is active", description_element.contains('active'));
            if (description_element.classList.contains('active')) {
                description_element.classList.remove('active');
            } else {
                description_element.classList.add('active');
            }
        })
    }
     
       console.log("End of block") 
    } catch (err) {
        console.log("You have an error: ", err);
    }
}


// *** Sync fetch function *** 
// function get_data(url) {
//     fetch(url)
//     .then ((response) =>{
//         response.json().then((result) =>{
//             console.log('Results:', result[0])
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     });
// }
// *** End ** 

function add_comment(container, comment) {
    const comment_box = document.createElement('div');
    comment_box.classList.add('comment-box');
    comment_box.innerHTML += 
    `<div class="title">${comment.name}</div>
    <div class="email">${comment.email}</div>
    <div class="description">${comment.body}</div>`;

    // *** Another way to inject HTML **
    // const name = document.createElement('div');
    // console.log(name)
    // name.classList.add('name');
    // name.innerHTML = comment.name;
    
    
    // const email = document.createElement('div');
    // // console.log(name)
    // email.classList.add('email');
    // email.innerHTML = comment.email;

    // comment_box.append('Name: ',name);
    // comment_box.append('Email: ',email);
    // *** End ** 
    container.append(comment_box);
}

