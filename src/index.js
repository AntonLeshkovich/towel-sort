
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result;
    if (matrix[1].length == 0) {
        let empty = [];
        matrix[1].push(empty);
        return result = matrix.flat();
    } else if (matrix[0].length == 0 && matrix[1].length == 0 && matrix[2].length == 0) {
        return [];
    } else {
        let arr1 = matrix[1];
        let reverseArr1 = arr1.reverse();
        matrix[1] = reverseArr1;
        
        return result = matrix.flat();
    }
}
