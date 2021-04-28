class SetText {
  constructor() {
    this.text;
    this.name;
  }

  setText(text) {
    this.text = text;
  }

  setLengthText(text) {
    return text.length;
  }

  setName(name) {
    this.name = name;
  }

  out(writer) {
    let len = this.setLengthText(this.text);

    writer.write(`Text: ${this.text}, Name: ${this.name}, Length: ${len}, `);
  }

  multiMethod() {}
}

module.exports = SetText;
