
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr1 = matrix[1];
    let reverseArr1 = arr1.reverse();
    matrix[1] = reverseArr1;
    let result = matrix.flat();

    return result;
}
