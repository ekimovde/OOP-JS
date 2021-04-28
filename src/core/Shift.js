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

  multiMethod(array, writer) {
    switch (Object.keys(array)[0]) {
      case "replacement":
        this.replaceMM(array, writer);
        break;
      case "shift":
        this.shiftMM(array, writer);
        break;
      default:
        return 0;
    }
  }

  replaceMM(array, writer) {
    this.out(writer);
    array.out(writer);
    writer.writeLine("Are Replacement and Shift");
  }

  shiftMM(array, writer) {
    this.out(writer);
    array.out(writer);
    writer.writeLine("Are Shift and Replacement");
  }
}

module.exports = Shift;
