/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the maximum value in each column. The array length should be equal to the number of columns, such that returnArray[i] is equal to the max value in the ith column.
*/
function maxColumn(matrix) {
    // Initialize an array to store the max values of each column
    let maxValues = [];
    
    // Loop through each column
    for (let col = 0; col < matrix[0].length; col++) {
      let max = -Infinity; // Set initial value to negative infinity to ensure any number will be larger
      
      // Loop through each row in the current column
      for (let row = 0; row < matrix.length; row++) {
        // Update max if a larger value is found
        if (matrix[row][col] > max) {
          max = matrix[row][col];
        }
      }
      
      // Add the max value of the current column to the result array
      maxValues.push(max);
    }
    
    return maxValues;
  }
  
  // Test the function
  const matrix = [
    [5, 9, 21],
    [9, 19, 6],
    [12, 14, 15]
  ];
  
  console.log(maxColumn(matrix)); // [12, 19, 21]

/*
Problem Recap:
We need to find the maximum value in each column of a 2D matrix and return an array where each element is the maximum of each corresponding column.

Example Matrix:
javascript
Copy
Edit
const matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15]
];
In this matrix, the goal is to:

Find the maximum value in the first column: [5, 9, 12]
Find the maximum value in the second column: [9, 19, 14]
Find the maximum value in the third column: [21, 6, 15]
Plan:
We will iterate over each column in the matrix.
For each column, we will iterate over all the rows to find the largest value in that column.
The result should be an array containing the largest values from each column.
Code Breakdown:
javascript
Copy
Edit
function maxColumn(matrix) {
  // Initialize an array to store the max values of each column
  let maxValues = [];
We start by creating an empty array maxValues, which will hold the maximum values for each column.
javascript
Copy
Edit
  // Loop through each column
  for (let col = 0; col < matrix[0].length; col++) {
The outer for loop iterates over each column in the matrix.
matrix[0].length gives the number of columns in the matrix. This works because the matrix is assumed to be rectangular, meaning all rows have the same number of columns.
The variable col represents the current column we are processing (e.g., 0 for the first column, 1 for the second column, etc.).
javascript
Copy
Edit
    let max = -Infinity; // Set initial value to negative infinity to ensure any number will be larger
For each column, we initialize a variable max to -Infinity. This ensures that no matter what value we encounter in the column, it will be larger than -Infinity, so we can start comparing the matrix values.
javascript
Copy
Edit
    // Loop through each row in the current column
    for (let row = 0; row < matrix.length; row++) {
The inner for loop iterates through each row for the current column.
matrix.length gives the number of rows in the matrix, so row goes from 0 to matrix.length - 1.
matrix[row][col] represents the element at the current row and current column in the matrix.
javascript
Copy
Edit
      // Update max if a larger value is found
      if (matrix[row][col] > max) {
        max = matrix[row][col];
      }
Inside the inner loop, we compare each element in the current column (matrix[row][col]) with the current value of max.
If the current element is greater than the current max, we update max with this new value.
javascript
Copy
Edit
    }
    
    // Add the max value of the current column to the result array
    maxValues.push(max);
After we've checked all the rows for the current column, we push the maximum value found (max) into the maxValues array. This ensures that the result array contains the largest values for each column.
javascript
Copy
Edit
  }
  
  return maxValues;
}
After the loops have completed, we return the maxValues array, which now contains the largest value from each column.
Example Walkthrough:
Consider the matrix:

javascript
Copy
Edit
const matrix = [
  [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15]
];
First column ([5, 9, 12]):

Initialize max = -Infinity.
Check the first element 5, update max = 5.
Check the second element 9, update max = 9.
Check the third element 12, update max = 12.
Result for the first column is 12.
Second column ([9, 19, 14]):

Initialize max = -Infinity.
Check the first element 9, update max = 9.
Check the second element 19, update max = 19.
Check the third element 14, max stays 19.
Result for the second column is 19.
Third column ([21, 6, 15]):

Initialize max = -Infinity.
Check the first element 21, update max = 21.
Check the second element 6, max stays 21.
Check the third element 15, max stays 21.
Result for the third column is 21.
Final Output:
The maxValues array after processing all columns is:

javascript
Copy
Edit
[12, 19, 21]
Time Complexity:
Let R be the number of rows and C be the number of columns in the matrix.
We have to loop through each column and check each row in that column.
Thus, the time complexity is O(R * C) because for each column, we iterate through all the rows.
Space Complexity:
The space complexity is O(C) because we only need an array of size equal to the number of columns to store the maximum values.
*/