// Arguments
// array (Array): The array to query.
// Returns
// (Array): Returns the slice of array.

// Example
// _.initial([1, 2, 3]);
// // => [1, 2]

// function initial(array) {
//     const newArray = [];
//     for (let i = 0; i < array.length - 1; i++) {
//         newArray.push(array[i]);
//     }
//     return newArray;
// }


function initial(array) {
    const newArray = [...array];
    newArray.pop();
    return newArray;
}
console.log(initial([1, 2, 3]));