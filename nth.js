// https://lodash.com/docs/4.17.15#nth
// _.nth(array, [n = 0])

// Gets the element at index n of array.If n is negative, the nth element from the end is returned.

// Arguments
// array (Array): The array to query.
// [n=0] (number): The index of the element to return.

// Returns
// (*): Returns the nth element of array.

// Example
// var array = ['a', 'b', 'c', 'd'];
 
// _.nth(array, 1);
// // => 'b'
 
// _.nth(array, -2);
// // => 'c';

function nth(arr, n = 0) {
    
    if (n < 0) {
        return arr[n + arr.length];
    } else {
        return arr[n];
    }
}

array = ['a', 'b', 'c', 'd'];
console.log(nth(array, -2));