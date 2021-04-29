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
  var writer = new Writer("out.txt");
  writer.writeLine("Start!");
  var container = new Container();

  try {
    var reader = new Reader("in.txt");
    container["in"](reader);
    container.sort();
    container.out(writer);
    container.clear();
    container.out(writer);
    writer.writeLine("Stop!");
    console.log("Stop");
    writer.save();
  } catch (error) {
    console.log("Файла нет!");
  }
}

main();