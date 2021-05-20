"use strict";

var _inFunc = require("./core/inFunc");

var _compare = require("./utils/compare");

var _validate = require("./utils/validate");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SetText = require("./core/SetText");

var Container = /*#__PURE__*/function () {
  function Container() {
    _classCallCheck(this, Container);

    this.array = [];
  }

  _createClass(Container, [{
    key: "in",
    value: function _in(reader) {
      while (!reader.fileEmpty()) {
        var tmp = reader.readLine();
        var setText = new SetText();

        if ((0, _validate.validate)(tmp)) {
          (0, _inFunc.inFunc)(tmp, setText, this.array);
        } else {
          console.log("Ошибка во входном файле!");
        }
      }

      return this.array;
    }
  }, {
    key: "out",
    value: function out(writer, array) {
      var c = array.length;
      var arrayData = []; // writer.writeLine(`Container contains: ${c}, elements!`);

      if (c > 0) for (var i = 0; i < c; i++) {
        arrayData.push(array[i].out(writer));
      }
    }
  }, {
    key: "outReplacement",
    value: function outReplacement(writer) {
      var c = this.array.length;
      writer.writeLine("Container contains: ".concat(c, ", elements!"));
      if (c > 0) for (var i = 0; i < c; i++) {
        if (this.filter(this.array, i)) {
          this.array[i].out(writer);
        }
      }
    }
  }, {
    key: "sort",
    value: function sort() {
      var c = this.array.length;
      var setText = new SetText();
      this.array.sort(function (a, b) {
        if ((0, _compare.compare)(setText, a.text, b.text)) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }, {
    key: "filter",
    value: function filter(array, i) {
      if (Object.keys(array[i])[0] === "replacement") {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "clear",
    value: function clear(array) {
      array = [];
      this.array = array;
      return this.array;
    }
  }]);

  return Container;
}();

module.exports = Container;