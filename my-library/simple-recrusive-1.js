function divider(number, depth) {
    const result = number / 3;
    console.log("depth", depth);
    console. log ("result", result);
    if (result > 1) {
        divider(result, ++depth);
    }
}
    divider(100, 0);