function binarySearch(items, term, depth) {
    const mid = Math.round (items.length / 2);
    if (items [mid]
    == term) {
    console. log("our term is ",items [mid], " it took"+ depth + " iterations")
    return items.mid;
    } else if (term > items [mid]) {
    const newItems = items.slice(mid);
    return binarySearch(newItems, term, ++depth);
    } else if (term < items [mid]) {
    const newItems = items.slice(0, mid);
    return binarySearch(newItems, term, ++depth) ;
    }
    }
    const myArr = [];
    for (let i = 0; i < 1000000; i++) {
    myArr.push(i);
    }
    binarySearch(myArr, 999999, 0) ;