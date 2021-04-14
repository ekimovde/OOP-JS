let SetText = require("./SetText");
let { shiftFunc } = require("../utils/encryption");

class Shift extends SetText {
  constructor() {
    super();
    this.shift;
    this.decodedText;
  }

  in(tmp) {
    const { shift, strEncoded } = shiftFunc(tmp);

    this.shift = shift;
    this.decodedText = strEncoded;
  }

  out(writer) {
    super.out(writer);
    writer.writeLine(`Shift: ${this.shift}, DecodedText: ${this.decodedText}`);
  }
}

module.exports = Shift;
