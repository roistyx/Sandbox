// This code show two ways to fetch Json object: Then, which 
//


// const output_div = document.getElementById('output-div');

// fetch('https://mocki.io/v1/676cd815-8cf5-4943-ace1-c7f2ebeaeca4').then((data) => {
//     data.json().then(parsed_data => {
//         output_div.innerHTML = JSON.stringify(parsed_data);
//         console.log(parsed_data)
//     })
// })

// const output_div = document.getElementById('output-div');

// async function fetchHello() {
//     const response = await fetch('https://mocki.io/v1/676cd815-8cf5-4943-ace1-c7f2ebeaeca4');
//     // const data = await response.body.json();
//     const data = await response.json();
//     output_div.innerHTML = JSON.stringify(data);
//     console.log(output_div)
// }

// fetchHello()

fetch('http://localhost:5050/fibonacci/5',{
    method: 'POST',
    headers: {
        'content-type': 'applicatio/jason'
    },

}).then(response => {
    return response.json()
})

    .then( data => console.log(data))
    .catch(error => console.log('Error'))

