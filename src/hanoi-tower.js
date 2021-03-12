const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const moves = 2 ** disksNumber - 1;
  const movesforsec = turnsSpeed / 3600;
  const time = Math.floor(moves / movesforsec);

  return {
    turns: moves,
    seconds: time
  };
};