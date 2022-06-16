// Arguments
// array (Array): The array to inspect.
// [values] (...Array): The values to exclude.

// Returns
// (Array): Returns the new array of filtered values.

function difference(array, values) {
  const diffArray = [];

  if (!Array.isArray(values)) {
    return [...array];
  }

  for (let i = 0; i < array.length; i++) {
    if (!values.includes(array[i])) {
      diffArray.push(array[i]);
    }
  }

  return diffArray;
}

console.log(difference([2, 1], [2, 3]));
// => [1]
console.log(difference([2, 1, 3, 4, 5], [2, 3, 5]));
