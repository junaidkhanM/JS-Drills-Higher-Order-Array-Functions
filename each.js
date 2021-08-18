
module.exports.each = (elements, cb) => {
    if (elements === undefined || cb === undefined) {
        return;
    }
    for (let i = 0; i < elements.length; i++) {
        cb(elements[i], i);
    }
};