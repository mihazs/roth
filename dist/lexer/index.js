"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moo = _interopRequireDefault(require("moo"));

var _rules = _interopRequireDefault(require("./rules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var lexer = _moo["default"].compile(_rules["default"]);

lexer.next = function (next) {
  return function () {
    var tok;

    while ((tok = next.call(lexer)) && tok.hasOwnProperty("type") && (tok.type === "space" || tok.type === "comment" || tok.type === "newline")) {}

    return tok;
  };
}(lexer.next);

var _default = lexer;
exports["default"] = _default;