
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let empty = [];
    if (matrix[0].length == 0 && matrix[1].length == 0 && matrix[2].length == 0) {
        return matrix;
    } else {
        matrix.forEach(item => {
            if (item.length == 0) {
                item.push(empty);
            }
        });
        let arr1 = matrix[1];
        let reverseArr1 = arr1.reverse();
        matrix[1] = reverseArr1;

        return matrix.flat();
    }
}
