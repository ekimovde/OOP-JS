let SetText = require("./core/SetText");
import { inFunc } from "./core/inFunc";
import { compare } from "./utils/compare";
import { validate } from "./utils/validate";

class Container {
  constructor() {
    this.array = [];
  }

  in(reader) {
    while (!reader.fileEmpty()) {
      let tmp = reader.readLine();
      let setText = new SetText();

      if (validate(tmp)) {
        inFunc(tmp, setText, this.array);
      } else {
        console.log("Ошибка во входном файле!");
      }
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
        this.array[i].out(writer);
      }
  }

  outReplacement(writer) {
    let c = this.array.length;

    writer.writeLine(`Container contains: ${c}, elements!`);

    if (c > 0)
      for (let i = 0; i < c; i++) {
        if (this.filter(this.array, i)) {
          this.array[i].out(writer);
        }
      }
  }

  sort() {
    let c = this.array.length;
    let setText = new SetText();

    this.array.sort((a, b) => {
      if (compare(setText, a.text, b.text)) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  filter(array, i) {
    if (Object.keys(array[i])[0] === "replacement") {
      return true;
    }
  }

  multiMethod(writer) {
    let c = this.array.length;
    writer.writeLine("MultiMethod");

    for (let i = 0; i < c - 1; i++) {
      for (let j = i + 1; j < c; j++) {
        this.array[i].multiMethod(this.array[j], writer);
      }
    }
  }

  clear() {
    this.array = [];
  }
}

module.exports = Container;
