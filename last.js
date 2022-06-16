// https://lodash.com/docs/4.17.15#last
// Arguments
// array (Array): The array to query.
// Returns
// (*): Returns the last element of array.

// Example
// _.last([1, 2, 3]);
// // => 3

function last(array) {
    return array[array.length - 1];
}

const array = [1, 2, 3, 4];
// const array = [];
console.log(last(array));