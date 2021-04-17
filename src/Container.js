let SetText = require("./core/SetText");
import { inFunc } from "./core/inFunc";

class Container {
  constructor() {
    this.array = [];
  }

  in(reader) {
    while (!reader.fileEmpty()) {
      let tmp = reader.readLine();
      let setText = new SetText();

      inFunc(tmp, setText, this.array);
    }
  }

  getArray(tmp) {
    this.array.push(tmp);
    return this.array;
  }

  out(writer) {
    let c = this.array.length;

    writer.writeLine(`Container contains: ${c}, elements!`);

    if (c > 0)
      for (let i = 0; i < c; i++) {
        if (this.filter(this.array, i)) {
          this.array[i].out(writer);
        }
      }
  }

  filter(array, i) {
    if (Object.keys(array[i])[0] === "replacement") {
      return true;
    }
  }

  clear() {
    this.array = [];
  }
}

module.exports = Container;
