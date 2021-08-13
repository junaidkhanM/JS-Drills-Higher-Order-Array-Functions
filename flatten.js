module.exports.flatten = (elements, cb) => {
    const d = Infinity;

    if ( d > 0) {
        return elements.reduce((acc, val) => 
            acc.concat(Array.isArray(val) ? this.flatten(val, d - 1) : val)
        , [])
    } else {
        return elements.slice();
    }
}