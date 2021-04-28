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
    writer.writeLine("Are ReplaceNumber and Replacement");
  }

  shiftMM(array, writer) {
    this.out(writer);
    array.out(writer);
    writer.writeLine("Are ReplaceNumber and Shift");
  }

  replaceNumberMM(array, writer) {
    this.out(writer);
    array.out(writer);
    writer.writeLine("Are ReplaceNumber and ReplaceNumber");
  }
}

module.exports = ReplaceNumber;
