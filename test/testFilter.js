const { filter } = require('../filter');

const items = [1, 2, 3, 4, 5, 5];

const cb = element => element > 5;

const result = filter(items, cb);
console.log(result);