"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.tokens = void 0;

var _moo = _interopRequireDefault(require("moo"));

var _itt = _interopRequireDefault(require("itt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tokens = {
  write: 0,
  "while": 1,
  until: 2,
  to: 3,
  then: 4,
  string: 5,
  repeat: 6,
  real: 7,
  read: 8,
  program: 9,
  procedure: 10,
  or: 11,
  of: 12,
  literal: 13,
  integer: 14,
  "if": 15,
  identificador: 16,
  î: 17,
  "for": 18,
  end: 19,
  "else": 20,
  "do": 21,
  declaravariaveis: 22,
  "const": 23,
  "char": 24,
  chamaprocedure: 25,
  begin: 26,
  array: 27,
  and: 28,
  ">=": 29,
  ">": 30,
  "=": 31,
  "<>": 32,
  "<=": 33,
  "<": 34,
  "+": 35,
  numreal: 36,
  numinteiro: 37,
  nomestring: 38,
  nomechar: 39,
  "]": 40,
  "[": 41,
  ";": 42,
  ":": 43,
  "/": 44,
  "..": 45,
  ".": 46,
  ",": 47,
  "*": 48,
  ")": 49,
  "(": 50,
  $: 51,
  "-": 52
};
exports.tokens = tokens;

var reserved = _itt["default"].keys({
  write: 0,
  "while": 1,
  until: 2,
  to: 3,
  then: 4,
  repeat: 6,
  read: 8,
  or: 11,
  of: 12,
  "if": 15,
  "for": 18,
  end: 19,
  "else": 20,
  "do": 21,
  begin: 26
}).map(function (x) {
  return [x, x];
}).toObject();

var _default = {
  comment: {
    match: /\/\*[\s\S]+\*\//,
    lineBreaks: true
  },
  literal: /\$(?:.{0,32})\$/,
  numreal: /[0-9]+\.[0-9]+/,
  numinteiro: /[0-9]+/,
  operator: ["+", "*", "/", "-", ">", ">=", "<>", "<", "="],
  symbol: ["]", "[", "(", ")", ":", ".", ";", "..", "$", ","],
  keyword: ["declaravariaveis"],
  identificador: {
    match: /[a-zA-Z_][a-zA-Z0-9_]{1,14}/,
    type: _moo["default"].keywords(_objectSpread({
      type: ["array", "integer", "char", "string", "real"],
      keyword: ["program", "const", "procedure", "chamaprocedure"],
      operator: ["or", "and"]
    }, reserved))
  },
  space: {
    match: /\s+/,
    lineBreaks: true
  } //IDEN: {match: /^[a-zA-Z_][a-zA-Z0-9_]*$/, type: moo.keywords({KW:["program"]})},

  /*keyword, */

};
exports["default"] = _default;