// Arguments
// array (Array): The array to modify.
// [indexes] (...(number|number[])): The indexes of elements to remove.
// Returns
// (Array): Returns the new array of removed elements.

function pullAt(array, ...indexes) {
  const pulledArray = [];
  const indexArray = Array.isArray(indexes[0]) ? indexes[0] : indexes;

    for (let i = 0; i < indexArray.length; i++) {
        pulledArray.push(array[indexArray[i]]);
    }
    indexArray.sort();
    for (let i = indexArray.length - 1; 0 <= i; i--) {
        array.splice(indexArray[i], 1);
    }

  return pulledArray;
}

var array = ["a", "b", "c", "d"];
var pulled = pullAt(array, [1, 3]);
// var pulled = pullAt(array, 0, 2);

console.log(array);
// => ['a', 'c']

console.log(pulled);
// => ['b', 'd']
