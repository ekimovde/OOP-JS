class SetText {
  constructor() {
    this.text;
  }

  setText(text) {
    this.text = text;
  }

  setLengthText(text) {
    return text.length;
  }

  out(writer) {
    let len = this.setLengthText(this.text);

    writer.write(`Text: ${this.text}, Length: ${len}, `);
  }
}

module.exports = SetText;
