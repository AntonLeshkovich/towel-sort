
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = matrix.flat();
    function sortArray (a, b) {
        return a - b;
    }
    
    return arr.sort(sortArray)
}
