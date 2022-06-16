// Arguments
// [arrays] (...Array): The arrays to inspect.
// Returns
// (Array): Returns the new array of intersecting values.

function intersection(...arrays) {
    const newArray = [];
    const headArray = arrays.shift();

    for (let i = 0; i < headArray.length; i++){
        const value = headArray[i];
        if (arrays.every((array) => array.includes(value))) {
            newArray.push(value);
        }
    }

    return newArray;
}

let result = intersection([2, 1], [2, 3]);
console.log(result);
// => [2]
result = intersection([2, 1], [2, 3], [2, 4]);
console.log(result);
// => [2]
result = intersection([2, 1], [1, 2, 3], [2, 4]);
console.log(result);
// => [2]
