// Arguments
// array (Array): The array to process.
// [size=1] (number): The length of each chunk
// Returns
// (Array): Returns the new array of chunks.

function chunk(array, size = 1) {
    const copiedArray = [...array];
    const chunkedArray = [];

    if (size < 1) {
        throw new Error("Please choose a number greater than 0");
    }

    while (copiedArray.length > 0) {
        chunkedArray.push(copiedArray.splice(0, size))
    }

    return chunkedArray;
}
console.log(chunk(["a", "b", "c", "d"], 2));
// => [['a', 'b'], ['c', 'd']]

console.log(chunk(["a", "b", "c", "d"], 3));
// => [['a', 'b', 'c'], ['d']]
