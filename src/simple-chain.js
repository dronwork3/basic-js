const chainMaker = {
  arr: new Array(),
  getLength() {
    return this.arr.length;
  },
  addLink(value = "") {
    this.arr.push(String(value));
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position >= 1 && position <= this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw Error;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = "( " + this.arr[0] + " )";
    for (let i = 1; i < this.arr.length; i++) {
      str = str + "~~( " + this.arr[i] + " )";
    }
    this.arr = [];
    return str;
  }
};


module.exports = chainMaker;
