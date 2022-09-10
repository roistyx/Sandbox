function linear_example () {
    const my_array = [];
    for (let i = 0; i < 100; i++){
        my_array.push(i);
    }
    const a1 = performance.now()
    console.log(a1)
}
linear_example ()