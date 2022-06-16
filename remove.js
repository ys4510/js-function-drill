// Arguments
// array (Array): The array to modify.
// [predicate=_.identity] (Function): The function invoked per iteration.
// Returns
// (Array): Returns the new array of removed elements.

function remove(array, predicate) {
  const removedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      removedArray.push(...array.splice(i, 1));
    }
  }
  return removedArray;
}

var array = [1, 2, 3, 4];
var evens = remove(array, function (n) {
  return n % 2 == 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]
