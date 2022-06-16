// Arguments
// [arrays] (...Array): The arrays to inspect.
// Returns
// (Array): Returns the new array of combined values.

function union(arrays) {
    const unionArray = [];

    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            if (!unionArray.includes(arguments[i][j])) {
                unionArray.push(arguments[i][j]);
            }
        }
    }

    return unionArray;
}

console.log(union([2], [1, 2]));
// => [2, 1]

const result = union(
    [10, 1, 2],
    [1, 2, 3],
    [3, 4, 5],
    [5, 10, 15],
    [10, 20, 30]
  );
  console.log(result);
  // [10, 1, 2, 3, 4, 5, 15, 20, 30]