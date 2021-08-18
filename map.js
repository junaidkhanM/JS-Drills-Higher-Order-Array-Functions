module.exports.map = (elements, cb) => {
    if (cb === undefined || elements === undefined || elements.length === 0) {
        return;
    }
    const arr = [];
    for (let i = 0; i < elements.length; i++) {
        arr.push(cb(elements[i]));
    }
    return arr;
}
