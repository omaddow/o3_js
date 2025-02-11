/*
Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the elements in spiral order.
*/
function spiralOrder(matrix) {

    if (matrix.length === 0) return []; // Handle empty matrix
  
    const result = [];
    let topRow = 0,
        bottomRow = matrix.length - 1,
        leftCol = 0,
        rightCol = matrix[0].length - 1;
  
    while (topRow <= bottomRow && leftCol <= rightCol) {
      // Traverse from left to right along the top row
      for (let i = leftCol; i <= rightCol; i++) {
        result.push(matrix[topRow][i]);
      }
      topRow++;
  
      // Traverse from top to bottom along the right column
      for (let i = topRow; i <= bottomRow; i++) {
        result.push(matrix[i][rightCol]);
      }
      rightCol--;
  
      // Traverse from right to left along the bottom row (if applicable)
      if (topRow <= bottomRow) {
        for (let i = rightCol; i >= leftCol; i--) {
          result.push(matrix[bottomRow][i]);
        }
        bottomRow--;
      }
  
      // Traverse from bottom to top along the left column (if applicable)
      if (leftCol <= rightCol) {
        for (let i = bottomRow; i >= topRow; i--) {
          result.push(matrix[i][leftCol]);
        }
        leftCol++;
      }
    }
  
    return result;
}
  
  // Example usage:
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(spiralOrder(matrix1)); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
  
const matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log(spiralOrder(matrix2)); // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

/*
Certainly! Let’s break down the spiral matrix traversal problem in detail and explain how the solution works step by step.

Problem Statement:
Given a 2D matrix, we need to traverse its elements in a spiral order and return them as a single array. Spiral order means we start at the top-left corner, move right, then down, then left, then up, and repeat this pattern layer by layer until all elements are traversed.

Example:
Input:
javascript
Copy
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
Output:
javascript
Copy
[1, 2, 3, 6, 9, 8, 7, 4, 5]
Approach:
To solve this problem, we simulate the spiral traversal by defining boundaries for the matrix and shrinking them as we traverse each layer. Here’s how it works:

Step-by-Step Explanation:
1. Define Boundaries:
We use four variables to represent the boundaries of the matrix:

topRow: The topmost row to traverse.

bottomRow: The bottommost row to traverse.

leftCol: The leftmost column to traverse.

rightCol: The rightmost column to traverse.

Initially:

topRow = 0 (first row).

bottomRow = matrix.length - 1 (last row).

leftCol = 0 (first column).

rightCol = matrix[0].length - 1 (last column).

2. Traverse the Matrix in Layers:
We process the matrix layer by layer, starting from the outermost layer and moving inward. For each layer, we perform the following steps:

Step 2.1: Traverse from Left to Right (Top Row)
Traverse the top row from leftCol to rightCol.

Add each element to the result array.

After traversing, increment topRow to move the top boundary inward.

Example:
For the first layer of the example matrix:

Traverse [1, 2, 3].

Add 1, 2, 3 to the result.

Increment topRow to 1.

Step 2.2: Traverse from Top to Bottom (Right Column)
Traverse the right column from topRow to bottomRow.

Add each element to the result array.

After traversing, decrement rightCol to move the right boundary inward.

Example:
For the first layer of the example matrix:

Traverse [6, 9] (from row 1 to row 2 in the right column).

Add 6, 9 to the result.

Decrement rightCol to 1.

Step 2.3: Traverse from Right to Left (Bottom Row)
If topRow <= bottomRow (to ensure there’s still a row to traverse):

Traverse the bottom row from rightCol to leftCol.

Add each element to the result array.

After traversing, decrement bottomRow to move the bottom boundary inward.

Example:
For the first layer of the example matrix:

Traverse [8, 7] (from column 1 to column 0 in the bottom row).

Add 8, 7 to the result.

Decrement bottomRow to 0.

Step 2.4: Traverse from Bottom to Top (Left Column)
If leftCol <= rightCol (to ensure there’s still a column to traverse):

Traverse the left column from bottomRow to topRow.

Add each element to the result array.

After traversing, increment leftCol to move the left boundary inward.

Example:
For the first layer of the example matrix:

Traverse [4] (from row 1 to row 0 in the left column).

Add 4 to the result.

Increment leftCol to 1.

3. Repeat Until All Layers Are Traversed:
The outer while loop continues as long as topRow <= bottomRow and leftCol <= rightCol.

After processing one layer, the boundaries are updated, and the next layer is processed.

4. Return the Result:
Once all layers are traversed, the result array contains all elements in spiral order.

Full Code with Comments:
javascript
Copy
function spiralOrder(matrix) {
  if (matrix.length === 0) return []; // Handle empty matrix

  const result = [];
  let topRow = 0,
      bottomRow = matrix.length - 1,
      leftCol = 0,
      rightCol = matrix[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    // Traverse from left to right along the top row
    for (let i = leftCol; i <= rightCol; i++) {
      result.push(matrix[topRow][i]);
    }
    topRow++; // Move the top boundary down

    // Traverse from top to bottom along the right column
    for (let i = topRow; i <= bottomRow; i++) {
      result.push(matrix[i][rightCol]);
    }
    rightCol--; // Move the right boundary left

    // Traverse from right to left along the bottom row (if applicable)
    if (topRow <= bottomRow) {
      for (let i = rightCol; i >= leftCol; i--) {
        result.push(matrix[bottomRow][i]);
      }
      bottomRow--; // Move the bottom boundary up
    }

    // Traverse from bottom to top along the left column (if applicable)
    if (leftCol <= rightCol) {
      for (let i = bottomRow; i >= topRow; i--) {
        result.push(matrix[i][leftCol]);
      }
      leftCol++; // Move the left boundary right
    }
  }

  return result;
}
Example Walkthrough:
Input:
javascript
Copy
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
Execution:
First Layer:

Traverse top row: [1, 2, 3] → Result: [1, 2, 3].

Traverse right column: [6, 9] → Result: [1, 2, 3, 6, 9].

Traverse bottom row: [8, 7] → Result: [1, 2, 3, 6, 9, 8, 7].

Traverse left column: [4] → Result: [1, 2, 3, 6, 9, 8, 7, 4].

Second Layer:

Traverse top row: [5] → Result: [1, 2, 3, 6, 9, 8, 7, 4, 5].

Termination:

Boundaries cross, so the loop ends.

Output:
javascript
Copy
[1, 2, 3, 6, 9, 8, 7, 4, 5]
Complexity Analysis:
Time Complexity: 
O
(
m
×
n
)
O(m×n), where 
m
m is the number of rows and 
n
n is the number of columns. We visit each element once.

Space Complexity: 
O
(
1
)
O(1) (excluding the output array), as we only use a few variables for boundaries.

This approach is efficient and works for any 2D matrix!
*/