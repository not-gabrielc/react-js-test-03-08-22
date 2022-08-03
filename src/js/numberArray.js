checkArray = (value) => {
    return value.every(element => {
        return typeof element === 'number';
    })
}

joinArray = (x, y) => {
    var joinedArray = x.concat(y)

    if (checkArray(joinedArray)) {
        return joinedArray
    }
    else if (!checkArray(joinedArray)) {
        return "array contains a string or a special character!"
    }
};
