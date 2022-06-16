// rguments
// array (Array): The array to inspect.
// [predicate=_.identity] (Function): The function invoked per iteration.
// [fromIndex=0] (number): The index to search from.
// Returns
// (number): Returns the index of the found element, else -1.

function findIndex(array, predicate, fromIndex = 0) {
  for (let i = fromIndex; i < array.length; i++) {
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
  { user: "pebbles", active: true },
];

const result = findIndex(users, function (o) {
  return o.user == "barney";
});
console.log(result);
// => 0
