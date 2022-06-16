// _.lastIndexOf(array, value, [fromIndex=array.length-1])
// source npm package

// This method is like _.indexOf except that it iterates over elements of array from right to left.

// Since
// 0.1.0

// Arguments
// array (Array): The array to inspect.
// value (*): The value to search for.
// [fromIndex=array.length-1] (number): The index to search from.
// Returns
// (number): Returns the index of the matched value, else -1.

// Example
// _.lastIndexOf([1, 2, 1, 2], 2);
// // => 3
 
// // Search from the `fromIndex`.
// _.lastIndexOf([1, 2, 1, 2], 2, 2);
// // => 1

function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

var arr = [1, 2, 1, 2];
console.log(lastIndexOf(arr, 2, 2));