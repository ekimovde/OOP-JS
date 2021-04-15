import { lengthText } from "../utils/lengthText";

class SetText {
  constructor() {
    this.text;
  }

  setText(text) {
    this.text = text;
  }

  out(writer) {
    let len = lengthText(this.text);

    writer.write(`Text: ${this.text}, Length: ${len}, `);
  }
}

module.exports = SetText;
