const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity !== 'string') {
    return false;
  } else if ((!Number(sampleActivity)) ||
    (sampleActivity <= 0) ||
    (sampleActivity >= 15)) {
    return false;
  }

  let res = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);

  return res;
};