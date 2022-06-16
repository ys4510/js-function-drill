// https://lodash.com/docs/4.17.15#zipObject

// Arguments
// [props=[]] (Array): The property identifiers.
// [values=[]] (Array): The property values.

// Returns
// (Object): Returns the new object.



function zipObject(props = [], values = []) {
    const zippedObject = {};
    for(let i = 0; i < props.length; i++) {
      const prop = props[i];
      const value = values[i];
      zippedObject[prop] = value;
    }
  
    return zippedObject;
  }
  
console.log(zipObject(['a', 'b'], [1, 2]));
  
// Example
// _.zipObject(['a', 'b'], [1, 2]);
// // => { 'a': 1, 'b': 2 }
