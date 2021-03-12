const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('Wrong argument!');
  }

  let modArr = arr.slice();
  let lenArr = modArr.length;
  let i = 0;
  let tmp;

  while (i < lenArr) {

    switch (modArr[i]) {
      case '--discard-prev':
        if ((i != 0) &&
          (modArr[i - 1] !== '--discard-next') &&
          (modArr[i - 1] !== '--double-prev') &&
          (modArr[i - 1] !== '--double-next')) {
          modArr.splice(i - 1, 1);
          lenArr = modArr.length;
          i--;
        }
        break;
      case '--discard-next':
        if ((i != lenArr) &&
          (modArr[i + 1] !== '--discard-prev') &&
          (modArr[i + 1] !== '--double-prev') &&
          (modArr[i + 1] !== '--double-next')) {
          modArr.splice(i + 1, 1);
          lenArr = modArr.length;
        }
        break;
      case '--double-prev':
        if ((i != 0) &&
          (modArr[i - 1] !== '--discard-prev') &&
          (modArr[i - 1] !== '--discard-next') &&
          (modArr[i - 1] !== '--double-next')) {
          tmp = modArr[i - 1]
          modArr.splice(i - 1, 1, tmp, tmp);
          lenArr = modArr.length;
          i++;
        }
        break;
      case '--double-next':
        if ((i != lenArr) &&
          (modArr[i + 1] !== '--discard-prev') &&
          (modArr[i + 1] !== '--discard-next') &&
          (modArr[i + 1] !== '--double-prev')) {
          tmp = modArr[i + 1]
          modArr.splice(i + 1, 1, tmp, tmp);
          lenArr = modArr.length;
        }
        break;
    }

    i++;
  }

  //удалить управляющие значения
  let results = modArr.filter(function (item, index, array) {
    switch (item) {
      case '--discard-prev':
        return false;
        break;
      case '--discard-next':
        return false;
        break;
      case '--double-prev':
        return false;
        break;
      case '--double-next':
        return false;
        break;
      default:
        if (item === undefined) return false;
        else return true;;
    }
  });

  return results;
}