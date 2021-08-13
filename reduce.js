module.exports.reduce = (elements, cb, startingValue) => {
    if (startingValue === undefined) {
        startingValue = elements[0];
        for (let i = 1; i < elements.length; i++) {
            startingValue = cb(startingValue, elements[i]);
        }
    } else {
        for (let i = 0; i < elements.length; i++) {
            startingValue = cb(startingValue, elements[i]);
        }
    }

    return startingValue;
}
