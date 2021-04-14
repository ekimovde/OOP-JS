"use strict";

var Container = require("./Container");

var Reader = require("./Reader");

var Writer = require("./Writer");

function main() {
  console.log("Start");
  var writer = new Writer("out.txt");
  writer.writeLine("Start!");
  var container = new Container();
  var reader = new Reader("in.txt");
  container["in"](reader);
  container.out(writer);
  container.clear();
  container.out(writer);
  writer.writeLine("Stop!");
  console.log("Stop");
  writer.save();
}

main();