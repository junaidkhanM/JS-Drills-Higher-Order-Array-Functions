module.exports.flatten = (elements, ans = []) => {
    for (let i = 0; i < elements.length; i++) {
        const value = elements[i];
        if (Array.isArray(value)) {
          this.flatten(value, ans);
        } else {
          ans.push(value);
        }
      }
      return ans;
}