// Arguments
// array (Array): The array to query.
// Returns
// (*): Returns the first element of array.

// Example
// _.head([1, 2, 3]);
// // => 1
 
// _.head([]);
// // => undefined

function head(array) {
    return array[0];
}

const array = [1,2,3];
console.log(head(array));