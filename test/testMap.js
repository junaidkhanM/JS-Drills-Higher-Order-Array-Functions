const { map } = require('../map');

const items = [1, 2, 3, 4, 5, 5];

const cb = (element) => {
    return element * 2;
}

const result = map(items, cb);
console.log(result);