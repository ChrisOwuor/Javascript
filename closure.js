

function addTo(num) {
  return function names(params) {
    return params + num;
  };
}
const fOne = addTo(4);
console.dir(fOne(8));
