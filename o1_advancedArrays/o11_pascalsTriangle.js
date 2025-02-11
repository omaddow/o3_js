/*
Pascal's triangle is a 2-dimensional array with the shape of a pyramid. The top of the pyramid is the number 1. To generate further levels of the pyramid, every element is the sum of the element above and to the left with the element above and to the right. Non-existing elements are treated as 0 when calculating the sum.

Write a function pascalsTriangle that accepts a positive number, n, as an argument and returns a 2-dimensional array representing the first n levels of Pascal's triangle. See the file for examples.
*/

// For example, here are the first 5 levels of Pascal's triangle:
//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1

function pascalsTriangle(n) {
    // Initialize the result array
    const result = [];

    // Loop to generate each row
    for (let i = 0; i < n; i++) {
        // Create a new row filled with 1's (the length of the row is i + 1)
        const row = Array(i + 1).fill(1);

        // Fill in the middle elements of the row
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        // Push the row to the result array
        result.push(row);
    }

    return result;
}

console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]

/*
Problem Recap:
Pascal's Triangle is a 2D array where:

The first and last elements of each row are always 1.
Each middle element is the sum of the two numbers directly above it (one to the left and one to the right).
For example:

markdown
Copy
Edit
      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1
Function Breakdown:
The pascalsTriangle function generates Pascal's Triangle up to the nth row. Let's break it down step-by-step.

javascript
Copy
Edit
function pascalsTriangle(n) {
    // Initialize the result array
    const result = [];
result: This will store the entire Pascal's Triangle. Initially, it's an empty array, and we will keep adding rows to it as we generate them.
javascript
Copy
Edit
    // Loop to generate each row
    for (let i = 0; i < n; i++) {
The for loop runs from 0 to n-1, where i represents the row number. This loop will generate all n rows of the triangle.
First Row:
javascript
Copy
Edit
        const row = Array(i + 1).fill(1);
row: For each row i, we create an array of length i + 1, filled with 1s. This is because every row starts and ends with 1.
For example:
For row 0 (the first row), the array will be [1] (1 element).
For row 1 (the second row), the array will be [1, 1] (2 elements).
For row 2 (the third row), the array will be [1, 1, 1] (3 elements).
And so on.
Filling in the Middle Elements:
javascript
Copy
Edit
        // Fill in the middle elements of the row
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
for (let j = 1; j < i; j++): This loop fills in the middle elements of the row. We don't need to modify the first and last elements since they are already 1 by default.
row[j] = result[i - 1][j - 1] + result[i - 1][j];: For each middle element, we set it to the sum of the two elements directly above it in the previous row (result[i - 1]).
For example:
For row 2 (the third row), the first and last elements are 1 (no change). The middle element is calculated as:
row[1] = result[1][0] + result[1][1] = 1 + 1 = 2, so row 2 becomes [1, 2, 1].
For row 3 (the fourth row), the first and last elements are 1. The middle elements are:
row[1] = result[2][0] + result[2][1] = 1 + 2 = 3
row[2] = result[2][1] + result[2][2] = 2 + 1 = 3, so row 3 becomes [1, 3, 3, 1].
Adding the Row to the Result:
javascript
Copy
Edit
        // Push the row to the result array
        result.push(row);
After filling in all the elements for the current row, we add the row to the result array.
Returning the Result:
javascript
Copy
Edit
    return result;
}
After generating all the rows, the function returns the entire Pascal's Triangle up to n rows.
Example Walkthrough:
Let's walk through an example with n = 5.

Row 0: [1]

It's just a single 1.
result = [[1]]
Row 1: [1, 1]

The first and last elements are 1s. There's no middle element for this row.
result = [[1], [1, 1]]
Row 2: [1, 2, 1]

The first and last elements are 1. The middle element is calculated as result[1][0] + result[1][1] = 1 + 1 = 2.
result = [[1], [1, 1], [1, 2, 1]]
Row 3: [1, 3, 3, 1]

The first and last elements are 1. The middle elements are:
result[2][0] + result[2][1] = 1 + 2 = 3
result[2][1] + result[2][2] = 2 + 1 = 3
result = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
Row 4: [1, 4, 6, 4, 1]

The first and last elements are 1. The middle elements are:
result[3][0] + result[3][1] = 1 + 3 = 4
result[3][1] + result[3][2] = 3 + 3 = 6
result[3][2] + result[3][3] = 3 + 1 = 4
result = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
So, after running console.log(pascalsTriangle(5)), the result will be:

javascript
Copy
Edit
[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
]
Example 2:
For n = 7, the process continues similarly to generate the first 7 rows of Pascal's Triangle.

By applying this same process, you would get:

javascript
Copy
Edit
[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1],
    [1, 6, 15, 20, 15, 6, 1]
]
Conclusion:
The function works by iteratively generating each row of Pascal's Triangle, starting with the first row and using the values from the previous row to calculate the middle elements. Each row is built by adding 1's at both ends and summing adjacent values from the previous row for the middle elements.
*/