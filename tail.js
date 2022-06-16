// Arguments
// array (Array): The array to query.
// Returns
// (Array): Returns the slice of array.

// Example
// _.tail([1, 2, 3]);
// // => [2, 3]

function tail(array) {
    if (!array) {
        return;
    }

    return array.slice(1);
}

console.log(tail([1, 2, 3]));
// => [2, 3]

function tail2(array) {
    const newArray = [];

    for (let i = 1; i < array.length; i++) {
        newArray.push(array[i]);
    }

    return newArray;
}

console.log(tail2([1, 2, 3, 4]));
