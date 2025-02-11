/*
Write a function pyramidArray(base) that takes in an array of numbers representing the base of a pyramid. The function should return a two-dimensional array representing the completed pyramid. To generate an element of the next level of the pyramid, we sum the elements below and to the left and below and to the right.
*/
// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9

function pyramidArray(base) {
    // Start with the base array as the last row of the pyramid
    let pyramid = [base];
    
    // Keep constructing each level of the pyramid
    while (base.length > 1) {
      let newRow = [];
      // Create the next row by summing adjacent elements in the current base
      for (let i = 0; i < base.length - 1; i++) {
        newRow.push(base[i] + base[i + 1]);
      }
      // Move up one level, the new row becomes the base for the next level
      pyramid.unshift(newRow);
      base = newRow;
    }
  
    return pyramid;
  }
  
  let p1 = pyramidArray([2, 3, 7, 5, 9]);
  console.log(p1);
  // [
  //   [ 85 ],
  //   [ 37, 48 ],
  //   [ 15, 22, 26 ],
  //   [ 5, 10, 12, 14 ],
  //   [ 2, 3, 7, 5, 9 ]
  // ]
  
  let p2 = pyramidArray([2, 2, 2, 2]);
  console.log(p2);
  // [
  //   [ 16 ],
  //   [ 8, 8 ],
  //   [ 4, 4, 4 ],
  //   [ 2, 2, 2, 2 ]
  // ]

/*
Problem Recap
You are given a base array of numbers, and you need to construct a pyramid from it. The pyramid should be structured such that each level (except the base) is derived from the level immediately below it, where each element in a higher level is the sum of the two adjacent elements in the row directly beneath it.

For example, for the base array [2, 3, 7, 5, 9], the pyramid looks like this:

markdown
Copy
Edit
       85
     37   48
   15   22   26
  5   10   12   14
2   3    7    5    9
Goal
You need to:

Start with the base array as the bottom level of the pyramid.
Construct each higher level by summing adjacent numbers from the row directly beneath.
Continue until you reach the top of the pyramid, which has only one number.
Approach Breakdown
Let's break down the steps taken in the function pyramidArray.

Step 1: Start with the base array
The first thing we do is store the base array in a variable called pyramid. This will be the bottom-most row of the pyramid, and we'll construct the pyramid upwards from here.

javascript
Copy
Edit
let pyramid = [base];
In this case, if the base is [2, 3, 7, 5, 9], then pyramid = [[2, 3, 7, 5, 9]].

Step 2: Construct the pyramid row by row
The pyramid is constructed level by level. We start with the bottom level and move upwards. We do this by summing adjacent elements in the current row to form the next row.

While the current row (the base array) has more than one element, we:

Create a new row (newRow) by summing adjacent elements of the current row.
Push the newly created row to the front of the pyramid array using unshift().
Set base to this new row and repeat the process.
The while loop keeps reducing the length of the current row by 1 each time until there's only one element left in the row (the apex of the pyramid).

javascript
Copy
Edit
while (base.length > 1) {
  let newRow = [];
  // Create the next row by summing adjacent elements in the current base
  for (let i = 0; i < base.length - 1; i++) {
    newRow.push(base[i] + base[i + 1]);
  }
  // Move up one level, the new row becomes the base for the next level
  pyramid.unshift(newRow);
  base = newRow;
}
Let's go through this loop with the example [2, 3, 7, 5, 9].

Example Walkthrough (Base = [2, 3, 7, 5, 9])
Start with the base row:

lua
Copy
Edit
pyramid = [[2, 3, 7, 5, 9]]
base = [2, 3, 7, 5, 9]
First iteration of the while loop:

Create a new row by summing adjacent elements:
ini
Copy
Edit
newRow = [2+3, 3+7, 7+5, 5+9] = [5, 10, 12, 14]
Insert the new row at the beginning of the pyramid:
lua
Copy
Edit
pyramid = [[5, 10, 12, 14], [2, 3, 7, 5, 9]]
Set base to [5, 10, 12, 14] and continue.
Second iteration of the while loop:

Create a new row by summing adjacent elements:
ini
Copy
Edit
newRow = [5+10, 10+12, 12+14] = [15, 22, 26]
Insert the new row at the beginning of the pyramid:
lua
Copy
Edit
pyramid = [[15, 22, 26], [5, 10, 12, 14], [2, 3, 7, 5, 9]]
Set base to [15, 22, 26] and continue.
Third iteration of the while loop:

Create a new row by summing adjacent elements:
ini
Copy
Edit
newRow = [15+22, 22+26] = [37, 48]
Insert the new row at the beginning of the pyramid:
lua
Copy
Edit
pyramid = [[37, 48], [15, 22, 26], [5, 10, 12, 14], [2, 3, 7, 5, 9]]
Set base to [37, 48] and continue.
Fourth iteration of the while loop:

Create a new row by summing adjacent elements:
ini
Copy
Edit
newRow = [37+48] = [85]
Insert the new row at the beginning of the pyramid:
lua
Copy
Edit
pyramid = [[85], [37, 48], [15, 22, 26], [5, 10, 12, 14], [2, 3, 7, 5, 9]]
Set base to [85], and now the while loop terminates since the base has only one element left.
Return the pyramid: The loop ends, and we return the final pyramid array:

javascript
Copy
Edit
[
  [85],
  [37, 48],
  [15, 22, 26],
  [5, 10, 12, 14],
  [2, 3, 7, 5, 9]
]
Final Output
For the input [2, 3, 7, 5, 9], the pyramid is constructed as:

javascript
Copy
Edit
[
  [85],
  [37, 48],
  [15, 22, 26],
  [5, 10, 12, 14],
  [2, 3, 7, 5, 9]
]
This structure correctly follows the rules of constructing the pyramid by summing adjacent numbers from the row directly below.

Time Complexity
The number of levels in the pyramid is determined by the size of the base array, and for each level, we compute a new row by iterating over the current row (which reduces in size at each level).
The time complexity of this approach is O(n²), where n is the length of the base array. This is because for each row, we sum adjacent elements, and the number of elements in each subsequent row is smaller by 1.
*/