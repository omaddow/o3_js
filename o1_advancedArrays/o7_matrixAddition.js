/*
Matrix Addition:
A 2-dimensional array is also known as a "matrix". Write a function matrixAddition that accepts two matrices as arguments. The two matrices are guaranteed to have the same "height" and "width". The function should return a new matrix representing the sum of the two arguments. To add matrices, we add the values at the same positions.
*/
function matrixAddition(matrix1, matrix2) {
    // Create an empty result matrix
    let resultMatrix = [];

    // Iterate over each row of the matrices
    for (let i = 0; i < matrix1.length; i++) {
        // Create a new row for the result matrix
        let resultRow = [];

        // Iterate over each element in the current row
        for (let j = 0; j < matrix1[i].length; j++) {
            // Add the corresponding elements from matrix1 and matrix2
            resultRow.push(matrix1[i][j] + matrix2[i][j]);
        }

        // Push the resulting row into the result matrix
        resultMatrix.push(resultRow);
    }

    return resultMatrix;
}

// Test cases
let matrixA = [[2, 5], [4, 7]];
let matrixB = [[9, 1], [3, 0]];
let matrixC = [[-1, 0], [0, -1]];
let matrixD = [[2, -5], [7, 10], [0, 1]];
let matrixE = [[0 , 0], [12, 4], [6, 3]];

console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]

/*
Problem Overview:
We are given two matrices (2D arrays) of the same size (same number of rows and columns), and we need to create a new matrix where each element is the sum of the corresponding elements from the two input matrices. The task is to iterate over the matrices and add corresponding elements.

Function Definition:
javascript
Copy
Edit
function matrixAddition(matrix1, matrix2) {
    let resultMatrix = []; // Step 1: Create an empty array to store the result
    for (let i = 0; i < matrix1.length; i++) { // Step 2: Iterate over each row of the matrices
        let resultRow = []; // Step 3: Create an empty array for the row in the result matrix
        for (let j = 0; j < matrix1[i].length; j++) { // Step 4: Iterate over each element in the row
            resultRow.push(matrix1[i][j] + matrix2[i][j]); // Step 5: Add corresponding elements
        }
        resultMatrix.push(resultRow); // Step 6: Push the computed row to the result matrix
    }
    return resultMatrix; // Step 7: Return the result matrix after all rows are processed
}
Step-by-step Explanation:
Initialization of Result Matrix:

We create an empty array resultMatrix that will eventually store the resulting matrix after adding the two input matrices element by element.
javascript
Copy
Edit
let resultMatrix = [];
Iterating Through Rows:

The function uses a loop to iterate over the rows of the matrices. The outer for loop runs from i = 0 to matrix1.length - 1, where matrix1.length gives the number of rows in the matrix (same for matrix2 because they have the same size).
javascript
Copy
Edit
for (let i = 0; i < matrix1.length; i++) {
Creating a New Row:

For each row of the matrices, we create an empty array resultRow to store the result of adding the elements of the two matrices for this particular row.
javascript
Copy
Edit
let resultRow = [];
Iterating Through Columns:

For each row, there is an inner loop that iterates through the elements in that row (columns). This loop runs from j = 0 to matrix1[i].length - 1, where matrix1[i].length gives the number of columns in the current row (same for matrix2 because they have the same size).
javascript
Copy
Edit
for (let j = 0; j < matrix1[i].length; j++) {
Adding Corresponding Elements:

Inside the inner loop, we add the elements from both matrices that are in the same position (i.e., the same row and column). The element at position [i][j] in matrix1 is added to the element at position [i][j] in matrix2.
This sum is pushed into the resultRow array, which holds the result of the current row.
javascript
Copy
Edit
resultRow.push(matrix1[i][j] + matrix2[i][j]);
Adding the Row to the Result Matrix:

After finishing the addition of all elements for a given row, the completed resultRow is pushed into the resultMatrix.
javascript
Copy
Edit
resultMatrix.push(resultRow);
Returning the Result Matrix:

Once the entire matrix has been processed and all rows have been added, we return the resultMatrix, which now contains the sum of the two input matrices.
javascript
Copy
Edit
return resultMatrix;
Example Walkthrough:
Input:
javascript
Copy
Edit
let matrixA = [[2, 5], [4, 7]];
let matrixB = [[9, 1], [3, 0]];
Initialize Result Matrix:

javascript
Copy
Edit
let resultMatrix = [];
Iterate Over Rows: The first for loop starts, with i = 0 for the first row.

For i = 0 (first row):

Create resultRow = [].
For j = 0 (first element of the row):
Add matrixA[0][0] + matrixB[0][0] → 2 + 9 = 11.
Push 11 into resultRow, so now resultRow = [11].
For j = 1 (second element of the row):
Add matrixA[0][1] + matrixB[0][1] → 5 + 1 = 6.
Push 6 into resultRow, so now resultRow = [11, 6].
Push the entire resultRow into resultMatrix, so now resultMatrix = [[11, 6]].
For i = 1 (second row):

Create resultRow = [].
For j = 0 (first element of the row):
Add matrixA[1][0] + matrixB[1][0] → 4 + 3 = 7.
Push 7 into resultRow, so now resultRow = [7].
For j = 1 (second element of the row):
Add matrixA[1][1] + matrixB[1][1] → 7 + 0 = 7.
Push 7 into resultRow, so now resultRow = [7, 7].
Push the entire resultRow into resultMatrix, so now resultMatrix = [[11, 6], [7, 7]].
Return the Result:

javascript
Copy
Edit
return [[11, 6], [7, 7]];
Final Result:
javascript
Copy
Edit
[[11, 6], [7, 7]]
Time Complexity:
The time complexity of this function is O(n * m), where n is the number of rows and m is the number of columns in the matrices. This is because we have to iterate through every element in both matrices.

Space Complexity:
The space complexity is O(n * m) as well, because we need to store the result matrix, which has the same dimensions as the input matrices.

Summary:
The matrixAddition function works by iterating through both input matrices and adding the corresponding elements at each position. It constructs a new matrix with the sums and returns it. The function works for any pair of matrices that have the same dimensions, ensuring that each element is added in the correct position.
*/