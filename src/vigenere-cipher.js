const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if ((message == null) || (key == null)) {
      throw new Error('Wrong argument!');
    }

    let direct = true;
    if (this.direct == false) direct = false;

    function fencrypt(message, key) {
      const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const alphaArr = alpha.split('');

      let betaArr = alphaArr.slice();
      let gammaArr = []; // table

      let a, b, result_a, result_b, c, ret;
      let result = '';

      let fmessage = String(message).toUpperCase();
      if (direct == false) fmessage = fmessage.split('').reverse().join(''); // reverse
      let fkey = String(key).toUpperCase();

      // increase fkey
      while (fmessage.length > fkey.length) fkey += fkey;

      // creature table
      for (let i = 0; i < 26; i++) {
        gammaArr.push(betaArr.slice());

        betaArr.push(betaArr[0]);
        betaArr.shift();
      }

      // encrypt
      ret = 0;
      for (let i = 0; i < fmessage.length; i++) {
        a = fmessage[i];
        b = fkey[i - ret];

        if (alphaArr.find(item => item == a)) {
          result_a = alphaArr.findIndex(item => item == a);
          result_b = alphaArr.findIndex(item => item == b);
          c = gammaArr[result_b][result_a];
        } else {
          c = a;
          ret++;
        }
        result += c;
      }

      //return
      return result;
    }

    return fencrypt(message, key);

  }

  decrypt(message, key) {

    if ((message == null) || (key == null)) {
      throw new Error('Wrong argument!');
    }

    let direct = true;
    if (this.direct == false) direct = false;

    function fdecrypt(message, key) {
      const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const alphaArr = alpha.split('');

      let betaArr = alphaArr.slice();
      let gammaArr = []; // table

      let a, b, result_a, result_b, c, ret;
      let result = '';

      let fmessage = String(message).toUpperCase();
      if (direct == false) fmessage = fmessage.split('').reverse().join(''); // reverse
      let fkey = String(key).toUpperCase();

      // increase fkey
      while (fmessage.length > fkey.length) fkey += fkey;

      // creature table
      for (let i = 0; i < 26; i++) {
        gammaArr.push(betaArr.slice());

        betaArr.push(betaArr[0]);
        betaArr.shift();
      }

      // decrypt
      ret = 0;
      for (let i = 0; i < fmessage.length; i++) {
        a = fmessage[i];
        b = fkey[i - ret];

        if (alphaArr.find(item => item == a)) {
          result_b = alphaArr.findIndex(item => item == b);
          result_a = gammaArr[result_b].findIndex(item => item == a);
          c = alphaArr[result_a];
        } else {
          c = a;
          ret++;
        }
        result += c;
      }

      //return
      return result;
    }

    return fdecrypt(message, key);
  }
}

module.exports = VigenereCipheringMachine;