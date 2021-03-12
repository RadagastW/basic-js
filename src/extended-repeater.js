const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let repeatTimes = (options.repeatTimes) ? options.repeatTimes : 1;
  let separator = (options.separator) ? options.separator : '+';

  let addition = '';
  if ((typeof options.addition !== 'boolean') && (typeof options.addition !== 'object'))
    addition = (options.addition) ? options.addition : '';
  else addition = String(options.addition);

  let additionRepeatTimes = (options.additionRepeatTimes) ? options.additionRepeatTimes : 1;
  let additionSeparator = (options.additionSeparator) ? options.additionSeparator : '|';

  let right_result = '';
  for (let i = 0; i < additionRepeatTimes; i++) {
    if (i < additionRepeatTimes - 1) right_result += addition + additionSeparator;
    else right_result += addition;
  }

  let result = '';
  let rep_string = str + right_result;
  for (let i = 0; i < repeatTimes; i++) {
    if (i < repeatTimes - 1) result += rep_string + separator;
    else result += rep_string;
  }

  return result;
};