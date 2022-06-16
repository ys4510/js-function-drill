// Arguments
// array (Array): The array to inspect.

// Returns
// (Array): Returns the new duplicate free array.

// Example
// _.uniq([2, 1, 2]);
// // => [2, 1]

function uniq(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(uniq([2, 1, 2]));
// => [ 2, 1 ]

console.log(uniq([2, 3, 1, 4, 2, 3, 4, 4]));
// => [ 2, 3, 1, 4 ]