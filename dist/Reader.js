"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require("fs");

var Reader = /*#__PURE__*/function () {
  function Reader(path) {
    _classCallCheck(this, Reader);

    this.path = path;
    this.data = fs.readFileSync(path, "utf-8").toString().split("\n");
    this.index = 0;
  }

  _createClass(Reader, [{
    key: "readLine",
    value: function readLine() {
      var tmp = this.data[this.index];
      this.index++;
      return tmp;
    }
  }, {
    key: "fileEmpty",
    value: function fileEmpty() {
      return this.index > this.data.length - 1 ? true : false;
      s;
    }
  }]);

  return Reader;
}();

module.exports = Reader;