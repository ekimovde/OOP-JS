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

    return this.array;
  }

  out(writer, array) {
    let c = array.length;
    let arrayData = [];
    // writer.writeLine(`Container contains: ${c}, elements!`);

    if (c > 0)
      for (let i = 0; i < c; i++) {
        arrayData.push(array[i].out(writer));
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
    } else {
      return false;
    }
  }

  clear(array) {
    array = [];
    this.array = array;

    return this.array;
  }
}

module.exports = Container;
