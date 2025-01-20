function foo(x) {
  // Use optional chaining and nullish coalescing to safely handle undefined or null values
  return x?.length ?? 0; 
}

console.log(foo(null)); // 0
console.log(foo([1, 2, 3])); // 3
console.log(foo(undefined)); // 0