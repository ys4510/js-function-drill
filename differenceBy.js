// Arguments
// array (Array): The array to inspect.
// [values] (...Array): The values to exclude.
// [iteratee=_.identity] (Function): The iteratee invoked per element.
// In this exercise, iteratee = a function
// Returns
// (Array): Returns the new array of filtered values.

function differenceBy(array, values, iteratee) {
    const copiedArray = [...array];
    
    for (let i = 0; i < values.length; i++) {
        console.log(`values[i] : ${values[i]}`);
        for (let j = copiedArray.length - 1; j >= 0; j--) {
            if (iteratee(values[i]) === iteratee(copiedArray[j])) {
                copiedArray.splice(j, 1);
            }
        }

    }
    return copiedArray;
}

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
// => [1.2]

console.log(differenceBy([2.1, 1.2, 3.5, 4.7], [2.3, 3.4], Math.floor));