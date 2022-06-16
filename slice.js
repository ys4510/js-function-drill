// https://lodash.com/docs/4.17.15#slice
// slice(array, [start = 0], [end = array.length])
// Creates a slice of array from start up to, but not including, end.

// Note: This method is used instead of Array#slice to ensure dense arrays are returned.

// Arguments
// array (Array): The array to slice.
// [start=0] (number): The start position.
// [end=array.length] (number): The end position.

// Returns
// (Array): Returns the slice of array.

function slice(array, start = 0, end = array.length) {
    const newArray = [];
    
    for (let i = start; i < end; i++) {
        newArray.push(array[i]);
    }

    return newArray;
}

numbers = [10, 20, 30, 40, 50];
console.log(slice(numbers,1, 4));
