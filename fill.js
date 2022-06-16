// Arguments
// array (Array): The array to fill.
// value (*): The value to fill array with.
// [start=0] (number): The start position.
// [end=array.length] (number): The end position.
// Returns
// (Array): Returns array.

// Example
// var array = [1, 2, 3];
 
// _.fill(array, 'a');
// console.log(array);
// // => ['a', 'a', 'a']
 
// _.fill(Array(3), 2);
// // => [2, 2, 2]
 
// _.fill([4, 6, 8, 10], '*', 1, 3);
// // => [4, '*', '*', 10]

function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
        array[i] = value;
    }
    return array;
}

// var array = [1, 2, 3];
var array = [4, 6, 8, 10];
console.log(fill(array, '*', 1, 2));