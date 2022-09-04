an_array = ['apple', 'beens', 'bread']

an_array.forEach((item, index) =>{
    console.log(index, item)
});

const new_array = an_array.map((value, index) => {
    return `${value}`;
});

console.log(an_array)
console.log(new_array)