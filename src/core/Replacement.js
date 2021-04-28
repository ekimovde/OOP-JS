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

  multiMethod(array, writer) {
    switch (Object.keys(array)[0]) {
      case "replacement":
        this.replaceMM(array, writer);
        break;
      case "shift":
        this.shiftMM(array, writer);
        break;
      case "replaceNumber":
        this.replaceNumberMM(array, writer);
      default:
        return 0;
    }
  }

  replaceMM(array, writer) {
    this.out(writer);
    array.out(writer);
    writer.writeLine("Are Replacement and Replacement");
  }

  shiftMM(array, writer) {
    this.out(writer);
    array.out(writer);
    writer.writeLine("Are Replacement and Shift");
  }

  replaceNumberMM(array, writer) {
    this.out(writer);
    array.out(writer);
    writer.writeLine("Are Replacement and ReplaceNumber");
  }
}

module.exports = Replacement;
