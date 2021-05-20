let Container = require("./Container");
let Reader = require("./Reader");
let Writer = require("./Writer");

export function main() {
  console.log("Start");

  try {
    let reader = new Reader("in.txt");
    let writer = new Writer("out.txt");

    writer.writeLine("Start!");

    let container = new Container();

    let array = container.in(reader);
    let arrOut = container.out(writer);
    container.sort();
    container.out(writer);
    container.outReplacement(writer);
    container.clear(container.array);
    container.out(writer);

    writer.writeLine("Stop!");

    console.log("Stop");

    writer.save();
  } catch (error) {
    console.log(error);
    console.log("Файла нет!");
  }
}

main();
