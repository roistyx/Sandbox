// Async function that take promise parses json to js to create content inn divs with event listener with toggle that show and hides divs element 

// *** Async fetch function ***
async function get_data(url) {
    const container_ref = document.getElementById('comments-container');
    container_ref.innerHTML = "Loading...";

    try {
       const response = await fetch(url);
       console.log("Response",response)
       const result = await response.json();

       container_ref.innerHTML = "";
    
   
       for (let i = 0; i < result.length; i++) {
           const object = result[i];
           add_comment(container_ref, object)
       }

    const comments = document.getElementsByClassName('comment-box');
    for (let comment of comments) {
        comment.addEventListener('click', (event) => {
            event.preventDefault();
            // event.currentTarget.children[2].style.display = 'block';
            const clicked_comment_box = event.currentTarget;
            const description_element = clicked_comment_box.children[2];
            // console.log ("is none", description_element.contains('display: none'));
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

window.onload = () => {
    console.log("I was on loaded")
    get_data("https://jsonplaceholder.typicode.com/comments");
    
};

function add_comment(container, comment) {
    // const comment_box = document.createElement('div');
    // comment_box.classList.add('comment-box');

    container.innerHTML += 
    `<div class="comment-box">
    <div class="title">${comment.name}</div>
    <div class="email">${comment.email}</div>
    <div class="description active">${comment.body}</div>
    </div>`;
    

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
    
}

