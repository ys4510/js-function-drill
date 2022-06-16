// Arguments
// array (Array): The array to query.
// [predicate=_.identity] (Function): The function invoked per iteration.
// In this exercise, predicate = function.

// Returns
// (Array): Returns the slice of array.

function dropRightWhile(array, predicate) {
  const newArray = [...array];
  for (let i = array.length - 1; i >= 0; i--) {
    // console.log(newArray[i]);

    if (!predicate(newArray[i])) {
      break;
    }
    newArray.pop();
  }
  return newArray;
}

var users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];
console.log(
  dropRightWhile(users, function (o) {
    return !o.active;
  })
);
// => objects for ['barney']
