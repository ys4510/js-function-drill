// Arguments
// array (Array): The array to modify.
// [values] (...*): The values to remove.
// Returns
// (Array): Returns array.

function pull(array, ...values) {
  if (arguments.length < 2) {
    return array;
  }

  for (let i = array.length - 1; 0 <= i; i--) {
    if (values.includes(array[i])) {
      array.splice(i, 1);
    }
  }

  return array;
}
var array = ["a", "b", "c", "a", "b", "c"];

let result = pull(array, "a", "c");
console.log(result);
// => ['b', 'b']
