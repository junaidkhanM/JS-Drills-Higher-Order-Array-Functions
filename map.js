module.exports.map = (elements, cb) => {
    const arr = [];
    for (let i = 0; i < elements.length; i++) {
        arr.push(cb(elements[i]));
    }
    return arr;
}
