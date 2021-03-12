const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  let countCatsinLine = matrix.flat();

  for (let cat of countCatsinLine) {
    if (cat == '^^') counter++;
  }

  return counter;
};