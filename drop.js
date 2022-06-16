// Arguments
// array (Array): The array to query.
// [n=1] (number): The number of elements to drop.
// Returns
// (Array): Returns the slice of array.

function drop(array, n = 1) {
    const newArray = [...array];
    for (let i = 0; i < n; i++) {
        newArray.shift();
        if (newArray.length === 0) {
            return [];
        }
    }
    return newArray;
}

var array = [1, 2, 3];
console.log(drop(array, 10));