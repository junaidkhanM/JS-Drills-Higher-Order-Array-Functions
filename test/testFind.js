const { find } = require('../find');

const items = [1, 2, 3, 4, 5, 5];

const cb = (element, toBeFind) => element === toBeFind;

const n = 3;
const result = find(items, cb, n);
console.log(result);