#!/usr/bin/env node
"use strict";

var _commander = _interopRequireDefault(require("commander"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_commander["default"].command('[file]').description('Executa um arquivo .roth').action(function (file) {
  console.log(file);
});

_commander["default"].parse(process.argv);