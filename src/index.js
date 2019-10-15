#!/usr/bin/env node

import program from 'commander';
import {read, write} from "./file.js";
import compile from "./compiler.js";
import {tokens} from "./lexer/rules.js";
program
    .version('0.1.0')
    .command('run <arquivo>')
    .option("-l, --lex", "Mostra o resultado do lexer")
    .option("-s, --syntax", "Mostra o resultado da análise sintática")
    .option("-c, --semantic", "Mostra o resultado da análise semântica")
    //.option("-w <saida>, --write <saida>", "Grava o resultado no arquivo especificado")
    .description('Executa um arquivo .roth')
    .action((arquivo, options) => {
        const code = read(arquivo);
        const result = compile(code);
        let output = "";
        if(options.lex){
            output += (`lex result\n\n${JSON.stringify(result.lex.map(k=>({
                linha: k.line, 
                codigo:(k.type == "identificador" ? tokens["identificador"] : (k.type in tokens ? tokens[k.type] : tokens[k.value])),
                lexema: k.value}), null, 4))}\n\n`);
        }
       /* console.log(options.write);
        if(options.write){
            write(options.write, output);
        }*/
        console.log(output);
        console.log("Success");
    });

program.parse(process.argv);