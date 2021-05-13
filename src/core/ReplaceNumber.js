let SetText = require("./SetText");
let { replaceNumberFunc } = require("../utils/encryption");

class ReplaceNumber extends SetText {
  constructor() {
    super();
    this.replaceNumber;
    this.decodedText;
  }

  in(tmp) {
    const { replacement, replaceText } = replaceNumberFunc(tmp);

    this.replaceNumber = replacement.join("-");
    this.decodedText = replaceText;
  }

  out(writer) {
    super.out(writer);

    writer.writeLine(
      `ReplaceNumber: ${this.replaceNumber}, DecodedText: ${this.decodedText}`
    );

    return `ReplaceNumber: ${this.replaceNumber}, DecodedText: ${this.decodedText}`
  }
}

module.exports = ReplaceNumber;
