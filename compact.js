// Arguments
// array (Array): The array to compact.
// Returns
// (Array): Returns the new array of filtered values.

function compact(array) {
    const compactedArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            compactedArray.push(array[i]);
        }
    }

    return compactedArray;
}

console.log(compact([0, 1, false, 2, '', 3]));
// => [1, 2, 3]