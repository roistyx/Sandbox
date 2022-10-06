// A loop function that searches for a number within a specified range and counts the number of iterations  
function binary_search(items, term, depth) {
    const mid_point = Math.round(items.length / 2);
    // console.log(mid_point)
    if (items[mid_point] == term){
        console.log("Our term is ", items[mid_point], " it took " + depth + " iterations");
        return items.mid_point;
    } else if (term > items[mid_point]){
        const new_items = items.slice(mid_point);
        return binary_search(new_items, term, ++depth);
    } else if (term < items[mid_point]){
        const new_item = items.slice(0, mid_point);
        return binary_search(new_item, term, ++depth);
    }
}

const my_array = [];
for (let i = 0; i < 1000000; i++){
    my_array.push(i);
}

binary_search(my_array, 735, 0);