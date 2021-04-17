let SetText = require("./SetText");
let { replaceNumberFunc } = require("../utils/encryption");

class ReplaceNumber extends SetText {
  constructor() {
    super();
    this.replacement;
    this.decodedText;
  }

  in(tmp) {
    const { replacement, replaceText } = replaceNumberFunc(tmp);

    this.replacement = replacement.join("-");
    this.decodedText = replaceText;
  }

  out(writer) {
    super.out(writer);

    writer.writeLine(
      `ReplaceNumber: ${this.replacement}, DecodedText: ${this.decodedText}`
    );
  }
}

module.exports = ReplaceNumber;
