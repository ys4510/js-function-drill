// _.take(array, [n = 1])

// Arguments
// array (Array): The array to query.
// [n=1] (number): The number of elements to take.

// Returns
// (Array): Returns the slice of array.

// Example
// _.take([1, 2, 3]);
// // => [1]
 
// _.take([1, 2, 3], 2);
// // => [1, 2]
 
// _.take([1, 2, 3], 5);
// // => [1, 2, 3]
 
// _.take([1, 2, 3], 0);
// // => []

function take(arr, n = 1) {
    const newArray = [];

    if (arr.length <= n) {
        return [...arr];
    }
    if (n === 0) {
        return [];
    }
    for (let i = 0; i < n; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
}

console.log(take([1, 2, 3]));
console.log(take([1, 2, 3], 2));
console.log(take([1, 2, 3], 5));
console.log(take([1, 2, 3], 0));
