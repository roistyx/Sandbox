// function sum_range(n) {
//     let total = 0;
//     for (let i = n; i > 0 ; i--) {
//         total = total + i;
//     }
//     console.log(total)
//     return total
    
// }


// sum_range(3)

function recursive_sum(n, total = 0){
    if (n <= 0 ) {
        return total
    }
    const number = recursive_sum(n - 1, total + n)
    // return number
}

