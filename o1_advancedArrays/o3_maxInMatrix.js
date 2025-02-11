/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and returns the largest value in the matrix. The matrix contains at least one value.
*/
function maxInMatrix(matrix) {
    let max = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
    }
    return max;
  }
  
  
  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]
  
  console.log(maxInMatrix(matrix)); // 72  

/*
Function Definition
javascript
Copy
Edit
function maxInMatrix(matrix) {
This line defines a function called maxInMatrix that takes a parameter named matrix. The matrix is expected to be a two-dimensional array (an array of arrays), where each inner array represents a row of the matrix.

Variable Initialization
javascript
Copy
Edit
  let max = -Infinity;
Here, a variable max is initialized to -Infinity. This is because we're looking for the maximum value in the matrix, and starting with -Infinity ensures that any number from the matrix will be larger than this initial value. This way, as we iterate through the matrix, we can update the value of max with the largest element we encounter.

Outer Loop (Iterating over rows)
javascript
Copy
Edit
  for (let i = 0; i < matrix.length; i++) {
This is the outer for loop. It iterates over each row in the matrix. The condition i < matrix.length ensures that we go through all the rows in the matrix (because matrix.length gives the number of rows).

Inner Loop (Iterating over columns)
javascript
Copy
Edit
      for (let j = 0; j < matrix[i].length; j++) {
This inner loop iterates over the columns of the current row. The condition j < matrix[i].length ensures that we go through all the elements in the current row (matrix[i]). Since each row is an array, matrix[i].length gives the number of elements in the row.

Checking for Maximum Value
javascript
Copy
Edit
          if (matrix[i][j] > max) {
              max = matrix[i][j];
          }
Inside the inner loop, the if condition checks if the current element matrix[i][j] is greater than the current value of max. If it is, the max variable is updated with the new largest value, which is matrix[i][j].

Return the Maximum Value
javascript
Copy
Edit
  return max;
After all the loops have completed, the function returns the value of max, which is now the largest value found in the entire matrix.

Example with the Provided matrix:
javascript
Copy
Edit
matrix = [[11, 2, -99],
          [20, 19, 10],
          [47, 72, 56]];
First pass: i = 0 (First row: [11, 2, -99])

j = 0: matrix[0][0] = 11, since 11 > -Infinity, max becomes 11.
j = 1: matrix[0][1] = 2, 2 is not greater than 11, so max stays 11.
j = 2: matrix[0][2] = -99, -99 is not greater than 11, so max stays 11.
Second pass: i = 1 (Second row: [20, 19, 10])

j = 0: matrix[1][0] = 20, since 20 > 11, max becomes 20.
j = 1: matrix[1][1] = 19, 19 is not greater than 20, so max stays 20.
j = 2: matrix[1][2] = 10, 10 is not greater than 20, so max stays 20.
Third pass: i = 2 (Third row: [47, 72, 56])

j = 0: matrix[2][0] = 47, 47 is not greater than 20, so max stays 20.
j = 1: matrix[2][1] = 72, since 72 > 20, max becomes 72.
j = 2: matrix[2][2] = 56, 56 is not greater than 72, so max stays 72.
After all iterations, the function returns 72, which is the largest number in the matrix.

Final Output
javascript
Copy
Edit
maxInMatrix(matrix); // Output: 72
This code works for any two-dimensional array (matrix) and will return the largest number in it.
*/