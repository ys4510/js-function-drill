// Arguments
// array (Array): The array to query.
// [predicate=_.identity] (Function): The function invoked per iteration.
// In this exercise, predicate is function
// Returns
// (Array): Returns the slice of array.

function takeRightWhile(array, predicate) {
    const newArray = [];

    for (let i = array.length - 1; 0 <= i; i--) {
        if (predicate(array[i])) {
            break;
        } 

        newArray.unshift(array[i]);
    }

    return newArray;
}

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
   
var result = takeRightWhile(users, function (o) { return !o.active; });
console.log(result);
  // => objects for ['fred', 'pebbles']
   