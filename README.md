# JavaScript TypeError: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error and its solution. The error occurs when trying to access the 'length' property of an undefined variable or object.

## Bug

The `bug.js` file contains a function `foo` that attempts to get the length of a parameter, but doesn't handle the case where the parameter is undefined.

## Solution

The `bugSolution.js` file provides a corrected version of `foo` that handles the undefined case using optional chaining and nullish coalescing.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` to see the error.
4. Run `node bugSolution.js` to see the corrected output.