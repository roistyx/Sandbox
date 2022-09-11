function linear_example () {
    const my_array = [];
    for (let i = 0; i < 100; i++){
        my_array.push(i);
    }
    const a1 = performance.now()
    console.log(a1)
    my_array.forEach((item)=>{
        console.log(item);
    });
    const a2 = performance.now();
    console.log("Time: ", a2 - a1);
}
linear_example ()