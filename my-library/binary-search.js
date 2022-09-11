// Doesnt work
function binary_search(items, term, depth) {
    const mid = Math.round(items.length / 2);
    if (items[mid] == term){
        const mid_item = items[mid]
        console.log("Our term is ", mid_item, "it took " + depth + " Iterations");
        return items.mid;
    } else if (term < items[mid]){
        const new_item = items.slice(mid);
        return binary_search(new_item, term, ++depth);
    }
    else if (term < items[mid]){
        const new_item = items.slice(0, mid);
        return binary_search(new_item, term, ++depth);
    }
}

const my_array = [];
for (let i = 0; i < 100; i++){
    my_array.push(i);
}

binary_search(my_array, 6, 0);