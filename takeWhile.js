// Arguments
// array (Array): The array to query.
// [predicate=_.identity] (Function): The function invoked per iteration.
// In this exercise, predicate = function()
// Returns
// (Array): Returns the slice of array.

function takeWhile(array, predicate) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i])) {
      break;
    }
    newArray.push(array[i]);
  }

  return newArray;
}

var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

console.log(
  takeWhile(users, function (o) {
    return !o.active;
  })
);
// => objects for ['barney', 'fred']
