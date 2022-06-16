// Arguments
// array (Array): The array to query.
// [predicate=_.identity] (Function): The function invoked per iteration.
// In this exercise, predicate = function.
// Returns
// (Array): Returns the slice of array.

function dropWhile(array, predicate) {

    const droppedArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!predicate(array[i])) {
            droppedArray.push(array[i]);
        }
    }

    return droppedArray;
}

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
   
const results = dropWhile(users, function (o) { return !o.active; });
console.log(results);
  // => objects for ['pebbles']