// Arguments
// array (Array): The array to convert.
// [separator=','] (string): The element separator.
// Returns
// (string): Returns the joined string.

// Example
// _.join(['a', 'b', 'c'], '~');
// // => 'a~b~c'

function join(array, separator = ',') {
    let str = array[0];
    for (let i = 1; i < array.length; i++) {
        str += separator + array[i];
    }
    return str;
}

const array = ['a', 'b', 'c'];
console.log(join(array, '~-='));