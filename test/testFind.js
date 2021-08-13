const { find } = require('../find');

const items = [1, 2, 3, 4, 5, 5];

const cb = (element) => element > 4;

const result = find(items, cb);
console.log(result);