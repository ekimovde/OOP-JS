"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = main;

var Container = require("./Container");

var Reader = require("./Reader");

var Writer = require("./Writer");

function main() {
  console.log("Start");

  try {
    var reader = new Reader("in.txt");
    var writer = new Writer("out.txt");
    writer.writeLine("Start!");
    var container = new Container();
    var array = container["in"](reader);
    var arrOut = container.out(writer);
    container.sort();
    arrOut = container.out(writer);
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