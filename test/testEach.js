const { each } = require('../each');

const items = [1, 2, 3, 4, 5, 5];

const cb = (element) => {
    console.log(element)
}

each(items, cb);