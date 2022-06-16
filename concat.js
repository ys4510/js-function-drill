// Arguments
// array (Array): The array to concatenate.
// [values] (...*): The values to concatenate.
// Returns
// (Array): Returns the new concatenated array.

function concat(array, ...values) {
    const concatenatedArray = [...array];

    for (let i = 0; i < values.length; i++) {
        if (Array.isArray(values[i])) {

            concatenatedArray.push(...values[i]);
        } else {
            concatenatedArray.push(values[i]);
        }
    }

    return concatenatedArray;
}

var array = [1];
var other = concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]

