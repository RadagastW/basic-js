const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let result = 1;

    arr.forEach((item) => {
      if (Array.isArray(item)) {
        const av = (this.calculateDepth(item) + 1);

        if (av > result) result = av;
      }
    });

    return result;
  }
};