module.exports.reduce = (elements, cb, startingValue) => {
        if (cb === undefined || elements === undefined || elements.length === 0) {
            return;
        }

        let i = 0;

        if (startingValue === undefined) {
            i = 1;
            startingValue = elements[0];
        }

        for (; i < elements.length; i++) {
            startingValue = cb(startingValue, elements[i]);
        }
    

    return startingValue;
}
