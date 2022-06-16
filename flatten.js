// Arguments
// array (Array): The array to flatten.
// Returns
// (Array): Returns the new flattened array.

// Example
// _.flatten([1, [2, [3, [4]], 5]]);
// // => [1, 2, [3, [4]], 5]


function flatten(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "object") {
            newArray.push(...array[i]);
            } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const array = [1, [2, [3, [4]], 5]];
console.log(flatten(array));