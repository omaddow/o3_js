/*
Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and returns the total sum of all numbers.
*/
const twoDimensionalSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let subArr1 = arr[i];
        for (let j = 0; j < subArr1.length; j++) {
            sum += subArr1[j];
        }
    }
    return sum;
}
let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6

/* CHATGPT EXPLANATION */
/*
This JavaScript code defines a function twoDimensionalSum that calculates the sum of all elements in a two-dimensional (nested) array. It also demonstrates how this function works with two example arrays (arr1 and arr2). Let's go through the code step by step.

Function Definition: twoDimensionalSum(arr)
javascript
Copy
Edit
const twoDimensionalSum = arr => {
    let sum = 0; // Initialize a variable to store the sum of all numbers
twoDimensionalSum is an arrow function that takes a parameter arr, which is expected to be a two-dimensional array (an array of arrays).
sum is initialized to 0. This variable will hold the cumulative sum of all the numbers inside the nested arrays.
javascript
Copy
Edit
    for (let i = 0; i < arr.length; i++) {
The outer for loop iterates over the main array arr. The loop variable i represents the index of each sub-array inside the main array arr.
arr.length is the total number of sub-arrays in arr.
javascript
Copy
Edit
        let subArr1 = arr[i]; // Get the sub-array at index 'i'
subArr1 is assigned the sub-array at index i of the main array arr. So for each iteration, subArr1 holds one of the inner arrays.
javascript
Copy
Edit
        for (let j = 0; j < subArr1.length; j++) {
The inner for loop iterates over the elements of subArr1, which is a sub-array. The loop variable j represents the index of each element in the current sub-array subArr1.
subArr1.length is the number of elements in subArr1.
javascript
Copy
Edit
            sum += subArr1[j]; // Add the current element to the sum
subArr1[j] represents the current element of the sub-array, and it is added to the sum variable.
javascript
Copy
Edit
        }
    }
    return sum; // Return the final sum after both loops finish
}
Once both loops have finished running, the sum will hold the total sum of all the numbers in the nested arrays, and this value is returned from the function.
Example 1: arr1
javascript
Copy
Edit
let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19
arr1 is a 2D array with three sub-arrays:
[1, 3]
[-4, 7, 10]
[2]
When the twoDimensionalSum function is called with arr1:
The outer loop iterates over arr1 (3 iterations).
In the first iteration, subArr1 is [1, 3], and the inner loop adds 1 + 3 = 4 to sum.
In the second iteration, subArr1 is [-4, 7, 10], and the inner loop adds -4 + 7 + 10 = 13 to sum.
In the third iteration, subArr1 is [2], and the inner loop adds 2 to sum.
The final sum is 4 + 13 + 2 = 19, which is logged to the console.
Example 2: arr2
javascript
Copy
Edit
let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6
arr2 is a 2D array with two sub-arrays:
[] (an empty array)
[3, 1, 2]
When the twoDimensionalSum function is called with arr2:
The outer loop iterates over arr2 (2 iterations).
In the first iteration, subArr1 is [], so the inner loop does not run (because the sub-array is empty).
In the second iteration, subArr1 is [3, 1, 2], and the inner loop adds 3 + 1 + 2 = 6 to sum.
The final sum is 6, which is logged to the console.
Summary of Output:
For arr1, the result is 19.
For arr2, the result is 6.
Key Points:
The code uses two nested loops: an outer loop to iterate over the main array and an inner loop to iterate over each sub-array.
It properly handles empty sub-arrays by simply skipping them.
It returns the sum of all elements in the two-dimensional array.
*/