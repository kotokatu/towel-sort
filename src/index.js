
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix) {
        matrix.map((el, ind) => {if (ind % 2) {el.reverse()}})
      return matrix.flat();
      } else {
        return [];
      }
}
