/*
Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and returns all lucky numbers in any order. A lucky number is the minimum element in its row and the maximum in its column.
*/
function luckyNumbers(matrix) {
    // Step 1: Find the minimum in each row.
    const rowMins = matrix.map(row => Math.min(...row));
  
    // Step 2: Find the maximum in each column.
    const colMaxs = [];
    for (let col = 0; col < matrix[0].length; col++) {
      let max = -Infinity;
      for (let row = 0; row < matrix.length; row++) {
        max = Math.max(max, matrix[row][col]);
      }
      colMaxs.push(max);
    }
  
    // Step 3: Check if row minimum is also column maximum.
    const luckyNumbers = [];
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        if (matrix[row][col] === rowMins[row] && matrix[row][col] === colMaxs[col]) {
          luckyNumbers.push(matrix[row][col]);
        }
      }
    }
  
    return luckyNumbers;
  }
  
  // Test cases
  const matrix1 = [
    [5, 9, 21],
    [9, 19, 6],
    [12, 14, 15]
  ];
  console.log(luckyNumbers(matrix1)); // [12]
  
  const matrix2 = [
    [5, 10, 8, 6],
    [10, 2, 7, 9],
    [21, 15, 19, 10]
  ];
  console.log(luckyNumbers(matrix2)); // [10]

/*
Problem Recap
We need to find lucky numbers in a matrix. A lucky number is defined as:

Minimum element in its row.
Maximum element in its column.
We need to return all lucky numbers from the matrix.

Step-by-Step Breakdown
1. Finding Row Minimums
For each row in the matrix, we need to find the minimum value. This can be done by scanning each row and finding the smallest number.

For example: In this matrix:

css
Copy
Edit
[ [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15] ]
Row 1 ([5, 9, 21]): The minimum value is 5.
Row 2 ([9, 19, 6]): The minimum value is 6.
Row 3 ([12, 14, 15]): The minimum value is 12.
Thus, the rowMins array will be [5, 6, 12].

We can use Math.min(...row) to find the minimum of each row.

2. Finding Column Maximums
For each column in the matrix, we need to find the maximum value. This can be done by looping through each column, going down row by row, and comparing values.

In our matrix:

css
Copy
Edit
[ [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15] ]
Column 1 ([5, 9, 12]): The maximum value is 12.
Column 2 ([9, 19, 14]): The maximum value is 19.
Column 3 ([21, 6, 15]): The maximum value is 21.
Thus, the colMaxs array will be [12, 19, 21].

To compute the column maximums, we need to iterate over each column and look for the largest value.

3. Checking for Lucky Numbers
Now, we check each element in the matrix. If the element satisfies two conditions:

It is the minimum value in its row (we check against rowMins).
It is the maximum value in its column (we check against colMaxs).
If both conditions are true, the number is a lucky number.

For the matrix:

css
Copy
Edit
[ [5, 9, 21],
  [9, 19, 6],
  [12, 14, 15] ]
In the first row ([5, 9, 21]), the minimum is 5, but 5 is not the maximum in its column (column 1 has 12 as the maximum).
In the second row ([9, 19, 6]), the minimum is 6, but 6 is not the maximum in its column (column 3 has 21 as the maximum).
In the third row ([12, 14, 15]), the minimum is 12, and 12 is the maximum in its column (column 1 has 12 as the maximum).
Thus, 12 is the only lucky number in this matrix.

For the matrix:

css
Copy
Edit
[ [5, 10, 8, 6],
  [10, 2, 7, 9],
  [21, 15, 19, 10] ]
In the first row ([5, 10, 8, 6]), the minimum is 5, but 5 is not the maximum in its column.
In the second row ([10, 2, 7, 9]), the minimum is 2, but 2 is not the maximum in its column.
In the third row ([21, 15, 19, 10]), the minimum is 10, and 10 is the maximum in its column (column 2 has 10 as the maximum).
Thus, 10 is the only lucky number in this matrix.

Code Explanation
Here’s the code again with comments to explain the logic:

javascript
Copy
Edit
function luckyNumbers(matrix) {
  // Step 1: Find the minimum in each row.
  const rowMins = matrix.map(row => Math.min(...row));
  // This creates an array of minimums for each row.

  // Step 2: Find the maximum in each column.
  const colMaxs = [];
  for (let col = 0; col < matrix[0].length; col++) {  // Loop over each column
    let max = -Infinity;  // Start with a very small number
    for (let row = 0; row < matrix.length; row++) {  // Loop over each row in the column
      max = Math.max(max, matrix[row][col]);  // Compare and keep the max value
    }
    colMaxs.push(max);  // After checking all rows in this column, add the max to the colMaxs array
  }

  // Step 3: Check if row minimum is also column maximum.
  const luckyNumbers = [];
  for (let row = 0; row < matrix.length; row++) {  // Loop through each row
    for (let col = 0; col < matrix[0].length; col++) {  // Loop through each column
      if (matrix[row][col] === rowMins[row] && matrix[row][col] === colMaxs[col]) {
        luckyNumbers.push(matrix[row][col]);  // If both conditions are met, it's a lucky number
      }
    }
  }

  return luckyNumbers;  // Return the array of lucky numbers
}
Step-by-Step Explanation of the Code:
Row Minimum Calculation:

We use map() to go over each row in the matrix and find the minimum value in the row using Math.min(...row).
This creates an array rowMins which holds the minimum value from each row.
Column Maximum Calculation:

We use a loop to go through each column (indexed by col).
For each column, we initialize a max variable and iterate through each row to find the maximum value for that column.
We store the maximum value for each column in the colMaxs array.
Finding Lucky Numbers:

We loop through every element in the matrix.
For each element, we check if it is the minimum in its row (compare with rowMins[row]) and if it is the maximum in its column (compare with colMaxs[col]).
If both conditions are true, we add that element to the luckyNumbers array.
Time Complexity:
Finding row minimums: O(m * n), where m is the number of rows and n is the number of columns.
Finding column maximums: O(m * n), as we are scanning each column for each row.
Checking for lucky numbers: O(m * n), since we're going over each element in the matrix.
Thus, the overall time complexity is O(m * n), where m is the number of rows and n is the number of columns.

Conclusion:
This approach ensures that we efficiently find the lucky numbers in the matrix by calculating row minimums and column maximums separately, then cross-checking to identify the lucky numbers.
*/