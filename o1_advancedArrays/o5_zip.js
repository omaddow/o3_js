/*
Write a function zip that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. You may assume that the input arrays have the same length.
*/
function zip(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
      result.push([arr1[i], arr2[i]]);
    }
    return result;
}
  
console.log(zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']));
// [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, 'vier' ] ]
  
console.log(zip(['eins', 'zwei', 'drei'], [1, 2, 3]));
// [ [ 'eins', 1 ], [ 'zwei', 2 ], [ 'drei', 3 ] ]
  
console.log(zip(['alef', 'bet'], ['alpha', 'beta']));
// [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

/*
Problem
You want to write a function called zip that takes two arrays, and returns a new array where each element is a subarray containing a pair of elements from the two input arrays at the same index.

For example:

If we have two arrays:

[1, 2, 3, 4]
['eins', 'zwei', 'drei', 'vier']
The result should be:

bash
Copy
Edit
[
  [1, 'eins'],
  [2, 'zwei'],
  [3, 'drei'],
  [4, 'vier']
]
Detailed Explanation
1. Function Definition
javascript
Copy
Edit
function zip(arr1, arr2) {
This line defines the function zip that takes two parameters: arr1 and arr2. These are the two arrays that you will pass when calling the function.
arr1 and arr2 are assumed to have the same length, as stated in the problem.
2. Initializing the Result Array
javascript
Copy
Edit
  const result = [];
We create an empty array result that will hold the final output (the 2D array). This is where we will store the subarrays that contain the pairs from arr1 and arr2.
3. Looping through the Arrays
javascript
Copy
Edit
  for (let i = 0; i < arr1.length; i++) {
Here, we use a for loop to iterate over the indices of the input arrays. The loop runs from i = 0 to i = arr1.length - 1. Since we are assuming the two arrays have the same length, you can use arr1.length for the loop condition (or arr2.length).

Important note: If arr1 and arr2 were to have different lengths (which the problem assumes they won’t), the loop would stop when the smaller array's length is reached. But under normal conditions, this works because the arrays are assumed to be the same length.

4. Pushing Paired Elements into result
javascript
Copy
Edit
    result.push([arr1[i], arr2[i]]);
Inside the loop, we access the element at index i from both arrays arr1[i] and arr2[i].
We then create a subarray [arr1[i], arr2[i]] that contains the pair of elements from both arrays at the current index i.
This subarray is then added to the result array using push(). This process repeats for every index i in the arrays.
5. Returning the Result
javascript
Copy
Edit
  return result;
}
After the loop finishes (i.e., when it has processed all elements in the arrays), the function returns the result array. This result is a two-dimensional array (an array of subarrays), where each subarray contains a pair of corresponding elements from arr1 and arr2.
Example Walkthrough
Let’s walk through an example to understand how the function works.

Input:

javascript
Copy
Edit
zip([1, 2, 3, 4], ['eins', 'zwei', 'drei', 'vier']);
Initialization:

arr1 = [1, 2, 3, 4]
arr2 = ['eins', 'zwei', 'drei', 'vier']
result = [] (starts as an empty array)
First iteration (i = 0):

arr1[0] = 1, arr2[0] = 'eins'
A subarray [1, 'eins'] is created and added to result.
result = [[1, 'eins']]
Second iteration (i = 1):

arr1[1] = 2, arr2[1] = 'zwei'
A subarray [2, 'zwei'] is created and added to result.
result = [[1, 'eins'], [2, 'zwei']]
Third iteration (i = 2):

arr1[2] = 3, arr2[2] = 'drei'
A subarray [3, 'drei'] is created and added to result.
result = [[1, 'eins'], [2, 'zwei'], [3, 'drei']]
Fourth iteration (i = 3):

arr1[3] = 4, arr2[3] = 'vier'
A subarray [4, 'vier'] is created and added to result.
result = [[1, 'eins'], [2, 'zwei'], [3, 'drei'], [4, 'vier']]
Return the result:

The loop ends, and the function returns result, which is:
javascript
Copy
Edit
[[1, 'eins'], [2, 'zwei'], [3, 'drei'], [4, 'vier']]
Additional Examples
Let’s look at the other examples you provided:

Example 2:

javascript
Copy
Edit
zip(['eins', 'zwei', 'drei'], [1, 2, 3]);
The result will be:
javascript
Copy
Edit
[['eins', 1], ['zwei', 2], ['drei', 3]]
Example 3:

javascript
Copy
Edit
zip(['alef', 'bet'], ['alpha', 'beta']);
The result will be:
javascript
Copy
Edit
[['alef', 'alpha'], ['bet', 'beta']]
Time Complexity
The function loops over each element in the input arrays once, so the time complexity is O(n), where n is the number of elements in the arrays. This is efficient for this task.
Space Complexity
The space complexity is O(n) as well, since the function creates a new array (result) that contains n subarrays.

*/