let SetText = require("./SetText");
let { replaceFunc } = require("../utils/encryption");

class Replacement extends SetText {
  constructor() {
    super();
    this.replacement;
    this.decodedText;
  }

  in(tmp) {
    const { replacement, replaceText } = replaceFunc(tmp);

    this.replacement = replacement.join("-");
    this.decodedText = replaceText;
  }

  out(writer) {
    super.out(writer);

    writer.writeLine(
      `Replacement: ${this.replacement}, DecodedText: ${this.decodedText}`
    );
  }
}

module.exports = Replacement;
