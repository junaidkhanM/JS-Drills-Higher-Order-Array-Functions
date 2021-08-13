const { reduce } = require('../reduce');

const items = [1, 2, 3, 4, 5, 5];
let start = 100;

const cb = (accu, curr) => accu + curr;

const result = reduce(items, cb, start);
console.log(result);