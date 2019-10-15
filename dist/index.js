#!/usr/bin/env node
"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _file = require("./file.js");

var _compiler = _interopRequireDefault(require("./compiler.js"));

var _rules = require("./lexer/rules.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_commander["default"].version('0.1.0').command('run <arquivo>').option("-l, --lex", "Mostra o resultado do lexer").option("-s, --syntax", "Mostra o resultado da análise sintática").option("-c, --semantic", "Mostra o resultado da análise semântica") //.option("-w <saida>, --write <saida>", "Grava o resultado no arquivo especificado")
.description('Executa um arquivo .roth').action(function (arquivo, options) {
  var code = (0, _file.read)(arquivo);
  var result = (0, _compiler["default"])(code);
  var output = "";

  if (options.lex) {
    output += "lex result\n\n".concat(JSON.stringify(result.lex.map(function (k) {
      return {
        linha: k.line,
        codigo: k.type == "identificador" ? _rules.tokens["identificador"] : k.type in _rules.tokens ? _rules.tokens[k.type] : _rules.tokens[k.value],
        lexema: k.value
      };
    }, null, 4)), "\n\n");
  }
  /* console.log(options.write);
   if(options.write){
       write(options.write, output);
   }*/


  console.log(output);
  console.log("Success");
});

_commander["default"].parse(process.argv);