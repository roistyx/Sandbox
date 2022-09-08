
window.onload = () => {
    get_data("https://jsonplaceholder.typicode.com/comments");
    console.log("Something")
    const container_ref = document.getElementById('comments-container');
    
    add_comment (container_ref, {
        title: "My title",
        email: "My email",
    });
};

function add_comment(container, comment) {
    const comment_box = document.createElement('div');
    comment_box.classList.add('comment_box');

    const title = document.createElement('div');
    comment_box.classList.add('title');
    
    const email = document.createElement('div');
    comment_box.classList.add('email');

    comment_box.appendChild(title);
    comment_box.appendChild(email);
    container.appendChild(comment_box);
}