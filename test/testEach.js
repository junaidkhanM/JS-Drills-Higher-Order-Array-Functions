const { each } = require('../each');

const items = [1, 2, 3, 4, 5, 5];

const cb = (element, index) => {
    console.log(element, index);
}

each(items, cb);