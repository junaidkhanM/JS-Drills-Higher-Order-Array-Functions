module.exports.find = (elements, cb, n) => {
    if (elements === undefined || cb === undefined || n === undefined) {
        return;
    } 
    for (let i = 0; i < elements.length; i++) {
        if (cb(elements[i], n)) {
            return elements[i];
        }
    }

    return undefined;
}