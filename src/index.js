
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let empty = [];
    if (!matrix || matrix.length == 0) {
        return [];
    } else {
        matrix.forEach(item => {
            if (item.length == 0) {
                item.push(empty);
            }
        });
        let everySecondArrays = matrix.filter(item => {
            let evenIndex = matrix.indexOf(item) + 1; 
            if (evenIndex % 2 === 0) {
                return evenIndex;
            }
            })
        everySecondArrays.forEach(item => {
            item.reverse();
        })

        return matrix.flat();
    }
}
