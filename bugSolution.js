function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw an error for nulls
  }

  return a + b;
}

//Alternative solution using a default value
function foo2(a, b) {
  const aVal = a === null ? 0 : a;
  const bVal = b === null ? 0 : b;
  return aVal + bVal;
}

console.log(foo2(null,5)); // Output: 5
console.log(foo2(5,null)); // Output: 5
console.log(foo2(null, null)); //Output: 0
//console.log(foo(null, 5)); // Throws an error
//console.log(foo(5, null)); // Throws an error
console.log(foo(5, 5)); // Output: 10