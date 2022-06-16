// Arguments
// pairs (Array): The key-value pairs.
// Returns
// (Object): Returns the new object.

function fromPairs(pairs) {
  const PairedObj = {};

  for (let i = 0; i < pairs.length; i++) {
    const [key, value] = pairs[i];
    PairedObj[key] = value;
  }
  return PairedObj;
}

const result = fromPairs([
  ["a", 1],
  ["b", 2],
]);
console.log(result);
// => { 'a': 1, 'b': 2 }
