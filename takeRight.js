// https://lodash.com/docs/4.17.15#takeRight
// _.takeRight(array, [n = 1])

// Arguments
// array (Array): The array to query.
// [n=1] (number): The number of elements to take.

// Returns
// (Array): Returns the slice of array.

// Example
// _.takeRight([1, 2, 3]);
// // => [3]
 
// _.takeRight([1, 2, 3], 2);
// // => [2, 3]
 
// _.takeRight([1, 2, 3], 5);
// // => [1, 2, 3]
 
// _.takeRight([1, 2, 3], 0);
// // => []

function takeRight(arr, n = 1) {

    if (n >= arr.length) {
        return arr;
    }

    if (n === 0) {
        return [];
    }

    return arr.slice(-n);
}

console.log(takeRight([1, 2, 3]));
// => [ 3 ]
console.log(takeRight([1, 2, 3], 2));
// => [ 2, 3 ]
console.log(takeRight([1, 2, 3], 5));
// = [ 1, 2, 3 ]
console.log(takeRight([1, 2, 3], 0));
// => []
