// Arguments
// array (Array): The array to modify.
// Returns
// (Array): Returns array.

function reverse(array) {
    const reversedArray = [];

    for (let i = 0; i < array.length; i++) {
        reversedArray.unshift(array[i]);
    }
    for (let i = 0; i < array.length; i++) { 
        array[i] = reversedArray[i];
    }
    return array;
}

var array = [1, 2, 3];
 
reverse(array);
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]
