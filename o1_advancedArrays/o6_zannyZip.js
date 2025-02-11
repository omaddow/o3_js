/*
Write a function zanyZip that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. If one of the arrays is shorter than the other, then substitute null for the missing elements.
*/
function zanyZip(arr1, arr2) {
    let maxLength = Math.max(arr1.length, arr2.length);
    let result = [];

    for (let i = 0; i < maxLength; i++) {
        result.push([arr1[i] || null, arr2[i] || null]);
    }

    return result;
}

console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

/*
Certainly! Let's break down the zanyZip function step by step:

1. Function Declaration:
javascript
Copy
Edit
function zanyZip(arr1, arr2) {
Here, the function zanyZip is defined, which accepts two arguments:

arr1: The first array.
arr2: The second array.
These two arrays will be used as the input to generate a new two-dimensional array.

2. Calculate Maximum Length:
javascript
Copy
Edit
let maxLength = Math.max(arr1.length, arr2.length);
We need to iterate through both arrays, but since they might not be the same length, we need to determine how many iterations we should perform. The Math.max() function returns the greater of the two lengths: arr1.length and arr2.length. This ensures that we handle cases where one array is longer than the other.

For example:

If arr1 has 2 elements and arr2 has 4 elements, maxLength will be 4.
If both arrays have the same length, maxLength will just be the length of either array.
3. Initialize the Result Array:
javascript
Copy
Edit
let result = [];
Here, we create an empty array result, which will eventually hold the final 2D array (the "zipped" version of arr1 and arr2).

4. Loop Through the Arrays:
javascript
Copy
Edit
for (let i = 0; i < maxLength; i++) {
We now use a for loop to iterate i from 0 to maxLength - 1. This ensures that we are iterating through the indexes of the longest array. The loop will run a number of times equal to the greater of the two array lengths (because we already calculated maxLength).

5. Push Pair of Elements into the Result Array:
javascript
Copy
Edit
result.push([arr1[i] || null, arr2[i] || null]);
Inside the loop, we push a pair (a subarray) into the result array.

arr1[i]: This tries to access the element at index i in arr1. If i is within the bounds of arr1, it will return the corresponding element.
arr2[i]: Similarly, this tries to access the element at index i in arr2.
However, sometimes one of the arrays may be shorter than the other, so we use the || null construct:

If arr1[i] is undefined (i.e., arr1 is shorter than arr2 and doesn't have an element at index i), then null will be used instead.
The same applies to arr2[i].
Thus, the pair will always contain two elements: one from arr1 and one from arr2. If one array is shorter, null will be used for the missing value.

For example:

If arr1 = [1, 2] and arr2 = ['eins', 'zwei', 'drei', 'vier'], then the loop will generate:
For i = 0: [1, 'eins']
For i = 1: [2, 'zwei']
For i = 2: [null, 'drei']
For i = 3: [null, 'vier']
6. Return the Result:
javascript
Copy
Edit
return result;
Once the loop has finished processing all the elements, the function returns the result array, which is now a two-dimensional array containing subarrays of paired elements from arr1 and arr2.

Example Breakdown:
Example 1:
javascript
Copy
Edit
console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));
arr1 = [1, 2]

arr2 = ['eins', 'zwei', 'drei', 'vier']

First, we calculate maxLength = Math.max(2, 4) = 4 because arr2 is longer.

The loop runs 4 times:

For i = 0: [1, 'eins']
For i = 1: [2, 'zwei']
For i = 2: [null, 'drei'] (since arr1 has no element at index 2)
For i = 3: [null, 'vier'] (since arr1 has no element at index 3)
The result is:

javascript
Copy
Edit
[ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]
Example 2:
javascript
Copy
Edit
console.log(zanyZip([1, 2, 3, 4], ['eins', 'zwei', 'drei']));
arr1 = [1, 2, 3, 4]

arr2 = ['eins', 'zwei', 'drei']

Here, maxLength = Math.max(4, 3) = 4 because arr1 is longer.

The loop runs 4 times:

For i = 0: [1, 'eins']
For i = 1: [2, 'zwei']
For i = 2: [3, 'drei']
For i = 3: [4, null] (since arr2 has no element at index 3)
The result is:

javascript
Copy
Edit
[ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]
Example 3:
javascript
Copy
Edit
console.log(zanyZip(['alef', 'bet'], ['alpha', 'beta']));
arr1 = ['alef', 'bet']

arr2 = ['alpha', 'beta']

Here, maxLength = Math.max(2, 2) = 2 since both arrays have the same length.

The loop runs 2 times:

For i = 0: ['alef', 'alpha']
For i = 1: ['bet', 'beta']
The result is:

javascript
Copy
Edit
[ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]
Key Points:
The function makes sure that it never attempts to access an element outside the bounds of either array.
The || null ensures that the shorter array is padded with null values where needed.
The final result is a two-dimensional array where each subarray contains corresponding elements from both input arrays, or null where an element is missing from one of the arrays.
*/