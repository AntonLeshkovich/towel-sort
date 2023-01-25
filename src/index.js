
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result;
  if (matrix[1].length == 0) {
      let arr1 = [];
      matrix[1].push(arr1);
      return result = matrix.flat();
  } else {
      let arr1 = matrix[1];
      let reverseArr1 = arr1.reverse();
      matrix[1] = reverseArr1;
      
      return result = matrix.flat();
  }
}
