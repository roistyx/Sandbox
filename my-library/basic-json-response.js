function get_data(url) {
    fetch(url)
    .then((response)=> {
        response.text().then((result) => {
            console.log(JSON.stringify(result));
        });
    })
    
    .catch((error) => {
        console.log(error);
    })
}

window.onload = () => {
    get_data("http://localhost:5050/")
}