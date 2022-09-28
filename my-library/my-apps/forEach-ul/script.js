let text = "";
const fruits = ["Apples", "Bananas", "Peaches", "Pineapples"];

document.getElementById('my-list').innerHTML = text;


fruits.forEach(item =>{
    console.log(item)
    
    document.getElementById('my-list').innerHTML = item;
    

})