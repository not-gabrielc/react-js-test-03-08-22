const checkArray = (value) => {
    return value.every(element => {
        return typeof element === 'number';
    })
}

const joinArray = (x, y) => {
    var joinedArray = x.concat(y)

    if (checkArray(joinedArray)) {
        return joinedArray
    }
    else if (!checkArray(joinedArray)) {
        throw new Error('Exception message');
    }
};

export { checkArray, joinArray }