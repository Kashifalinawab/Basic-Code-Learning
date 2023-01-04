function add() {
    let result = 0;
    for (let index = 0; index < arguments.length; index++) {
        result += arguments[index];
    }
    return result;
}

console.log(add(1, 2, 4, 5, 6));