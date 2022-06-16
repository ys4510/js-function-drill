// Arguments
// array (Array): The array to inspect.
// [predicate=_.identity] (Function): The function invoked per iteration.
// [fromIndex=array.length-1] (number): The index to search from.
// In this exercise, predicate = function

// Returns
// (number): Returns the index of the found element, else -1.

function findLastIndex(array, predicate, fromIndex = array.length - 1) {
  for (let i = fromIndex; i >= 0; i--) {
    const value = array[i];
    if (predicate(value)) {
      return i;
    }
  }

  return -1;
}

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

let result = findLastIndex(users, function (o) {
  return o.user == "pebbles";
});
console.log(result);
// => 2

result = findLastIndex(users, function (o) {
    return o.user == "fred";
  });
  console.log(result);
  // => 1