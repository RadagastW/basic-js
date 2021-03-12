const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let CDT = new Array();
  let membersinLine = members;

  for (let member of membersinLine) {
    if (typeof member === 'string') {
      member = member.replace(/\s/g, '').toUpperCase();
      CDT.push(member[0]);
    }
  }

  CDT.sort();

  return CDT.join('');
};