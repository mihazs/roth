"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _lexer = _interopRequireDefault(require("./lexer"));

var _itt = _interopRequireDefault(require("itt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(code) {
  _lexer["default"].reset(code);

  return {
    lex: Array.from(_lexer["default"])
  };
}