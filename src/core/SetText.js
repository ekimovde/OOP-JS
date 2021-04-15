class SetText {
  constructor() {
    this.text;
    this.name;
  }

  setText(text) {
    this.text = text;
  }

  setName(name) {
    this.name = name;
  }

  out(writer) {
    writer.write(`Text: ${this.text}, Name: ${this.name}, `);
  }
}

module.exports = SetText;
