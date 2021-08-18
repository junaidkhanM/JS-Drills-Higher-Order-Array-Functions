module.exports.filter = (elements, cb) => {
  if (elements === undefined || cb === undefined) {
    return;
  }
  
  const arr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      arr.push(elements[i]);
    }
  }
  return arr;
};
