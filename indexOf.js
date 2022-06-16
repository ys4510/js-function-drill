// Arguments
// array (Array): The array to inspect.
// value (*): The value to search for.
// [fromIndex=0] (number): The index to search from.
// Returns
// (number): Returns the index of the matched value, else -1.

// Example
// _.indexOf([1, 2, 1, 2], 2);
// // => 1
 
// // Search from the `fromIndex`.
// _.indexOf([1, 2, 1, 2], 2, 2);
// // => 3

function indexOf(array, value, fromIndex = 0) {
    if (fromIndex < 0) {
        for (let i = array.length + fromIndex; 0 <= i; i--) {
            if (array[i] === value) {
                return i;
            }
        }
        return -1;
    }

    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

array = [1, 2, 3, 1,3, 1, 2];
console.log(indexOf(array, 3, 3));