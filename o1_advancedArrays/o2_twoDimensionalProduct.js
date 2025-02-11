/*
Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. The function should return the total product of all numbers multiplied together.
*/
const twoDimensionalProduct = array => {
    let pro = 1;
    for (let i = 0; i < array.length; i++) {
        let subArr1 = array[i];
        for (let j = 0; j < subArr1.length; j++) {
            pro *= subArr1[j];
        }
    }
    return pro;
}

let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88