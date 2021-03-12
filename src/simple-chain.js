const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  chainMakerLength: 0,

  getLength() {
    return this.chainMakerLength;
  },
  addLink(value) {
    if (value === null)
      this.chain.push('( null )');
    else if (value !== '')
      this.chain.push(`( ${value} )`);
    else this.chain.push('( )');

    this.chainMakerLength++;
    return this;
  },
  removeLink(position) {
    if ((position == 'number') ||
      (position < this.chainMakerLength) ||
      (position > 0)) {
      this.chain.splice(position - 1, 1);
      this.chainMakerLength--;
    } else {
      this.chain.length = 0;
      this.chain = [];
      throw new Error('Wrong argument!');
    }

    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');

    this.chain.length = 0;
    this.chain = [];
    this.chainMakerLength = 0;

    return result;
  }
};

module.exports = chainMaker;