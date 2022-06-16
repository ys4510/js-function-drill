// Arguments
// array (Array): The array to query.
// [n=1] (number): The number of elements to drop.
// Returns
// (Array): Returns the slice of array.

function dropRight(array, n = 1) {
    const newArray = [...array];

    for (let i = 0; i < n; i++) {
        newArray.pop();
    }
    return newArray;
}

console.log(dropRight([1, 2, 3]));
// => [1, 2]

console.log(dropRight([1, 2, 3], 2));
// => [1]
 
console.log(dropRight([1, 2, 3], 5));
// => []
 
console.log(dropRight([1, 2, 3], 0));
// => [1, 2, 3]
