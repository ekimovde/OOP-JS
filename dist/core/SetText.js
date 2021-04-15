"use strict";

var _lengthText = require("../utils/lengthText");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SetText = /*#__PURE__*/function () {
  function SetText() {
    _classCallCheck(this, SetText);

    this.text;
  }

  _createClass(SetText, [{
    key: "setText",
    value: function setText(text) {
      this.text = text;
    }
  }, {
    key: "out",
    value: function out(writer) {
      var len = (0, _lengthText.lengthText)(this.text);
      writer.write("Text: ".concat(this.text, ", Length: ").concat(len, ", "));
    }
  }]);

  return SetText;
}();

module.exports = SetText;