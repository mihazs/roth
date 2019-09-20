#!/usr/bin/env node

import program from 'commander';

program
    .command('[file]')
    .description('Executa um arquivo .roth')
    .action((file) => {
        console.log(file);
    });

program.parse(process.argv);