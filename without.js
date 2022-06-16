// _.without(array, [values])
// https://lodash.com/docs/4.17.15#without

// Arguments
// array (Array): The array to inspect.
// [values] (...*): The values to exclude.
// Returns
// (Array): Returns the new array of filtered values.

// Example
// _.without([2, 1, 2, 3], 1, 2);
// // => [3]

function without(array, values) {
    const newArray = [...arguments[0]];
    let deletedNum = 0;

    for (let i = 0; i < arguments[0].length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (arguments[0][i] === arguments[j]) {
                newArray.splice(i-deletedNum, 1);
                deletedNum++;
            }
        }
    }
    return newArray;
}

console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([4, 5, 2, 1, 2, 4, 3, 5], 1, 5));