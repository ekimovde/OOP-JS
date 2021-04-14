"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inFunc = void 0;

var Replacement = require("./Replacement");

var Shift = require("./Shift");

var inFunc = function inFunc(tmp, setText, array) {
  switch (tmp[0]) {
    case "1":
      var replacement = new Replacement();
      replacement["in"](tmp.toString().split(" "));
      setText = replacement;
      setText.setText(tmp.split(" ")[1].replace(/\r/g, ""));
      array.push(replacement);
      break;

    case "2":
      var shift = new Shift();
      shift["in"](tmp.toString().split(" "));
      setText = shift;
      setText.setText(tmp.split(" ")[1]);
      array.push(shift);
      break;

    default:
      return 0;
  }
};

exports.inFunc = inFunc;