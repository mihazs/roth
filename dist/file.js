"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = read;
exports.write = write;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function read(path) {
  return _fs["default"].readFileSync(path, 'utf8');
}

function write(path, content) {
  console.log(path);

  _fs["default"].writeFileSync(path, content, "utf-8");
}