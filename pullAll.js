// Arguments
// array (Array): The array to modify.
// values (Array): The values to remove.
// Returns
// (Array): Returns array.

function pullAll(array, values) {

    for (let i = array.length - 1; 0 <= i; i--) {
        if (values.includes(array[i])) {
            array.splice(i, 1);
        }
    }
    
    return array;
}

var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
let result = pullAll(array, ['a', 'c']);
console.log(result);
// => ['b', 'b']