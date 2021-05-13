let Container = require("./Container");
let Reader = require("./Reader");
let Writer = require("./Writer");

export function main() {
  console.log("Start");

  let writer = new Writer("out.txt");

  writer.writeLine("Start!");

  let container = new Container();

  try {
    let reader = new Reader("in.txt");

    let array = container.in(reader);
    container.out(writer);
    container.sort();
    container.out(writer);
    container.outReplacement(writer);
    container.clear(container.array);
    container.out(writer);

    writer.writeLine("Stop!");

    console.log("Stop");

    writer.save();
  } catch (error) {
    console.log("Файла нет!");
  }
}

main();
