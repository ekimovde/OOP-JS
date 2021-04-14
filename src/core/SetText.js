class SetText {
  constructor() {
    this.text;
  }

  setText(text) {
    this.text = text;
  }

  out(writer) {
    writer.write(`Text: ${this.text}, `);
  }
}

module.exports = SetText;
