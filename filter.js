module.exports.filter = (elements, cb) => {
    const arr = [];
    for (let i = 0; i < elements.length; i++) {
        if (cb(elements[i])) {
            arr.push(elements[i]);
        }
    }
    return arr;
}