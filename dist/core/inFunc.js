"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inFunc = void 0;

var Replacement = require("./Replacement");

var Shift = require("./Shift");

var ReplaceNumber = require("./ReplaceNumber");

var inFunc = function inFunc(tmp, setText, array) {
  switch (tmp[0]) {
    case "1":
      var replacement = new Replacement();
      replacement["in"](tmp.toString().split(" "));
      setText = replacement;
      setText.setText(tmp.split(" ")[1].replace(/\r/g, ""));
      setText.setName(tmp.split(" ")[3].replace(/\r/g, ""));
      array.push(replacement);
      break;

    case "2":
      var shift = new Shift();
      shift["in"](tmp.toString().split(" "));
      setText = shift;
      setText.setText(tmp.split(" ")[1]);
      setText.setName(tmp.split(" ")[3]);
      array.push(shift);
      break;

    case "3":
      var replaceNumber = new ReplaceNumber();
      replaceNumber["in"](tmp.toString().split(" "));
      setText = replaceNumber;
      setText.setText(tmp.split(" ")[1].replace(/\r/g, ""));
      setText.setName(tmp.split(" ")[3]);
      array.push(replaceNumber);
      break;

    default:
      return 0;
  }
};

exports.inFunc = inFunc;