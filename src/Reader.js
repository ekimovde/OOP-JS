let fs = require("fs");

class Reader {
  constructor(path) {
    this.path = path;
    this.data = fs.readFileSync(path, "utf-8").toString().split("\n");
    this.index = 0;
  }

  readLine() {
    let tmp = this.data[this.index];
    this.index++;

    return tmp;
  }

  fileEmpty() {
    return this.index > this.data.length - 1 ? true : false;
    s;
  }
}

module.exports = Reader;
