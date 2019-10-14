import moo from "moo";
const keyword = [
    'while', 
    'if', 
    'else', 
    'begin', 
    'program', 
    'end', 
    'const', 
    'declaravariaveis', 
    'procedure', 
    'of', 
    'integer',
    'real',
    'repeat',
    'chamaprocedure',
    'for',
    'to',
    'do',
    'until',
    'then',
    '.'];


export default {
    keyword,
    comment: /\/\*[\s\S]+\*\//,
    identifier: /[a-zA-Z_][a-zA-Z0-9_]{1,14},?/,
    endline: ";",
    operator: ["+", "-", "*", "/"],
    space: {match: /\s+/, lineBreaks: true},
    literal: /\$(?:.{0,32})\$/,
    

    
    
    //IDEN: {match: /^[a-zA-Z_][a-zA-Z0-9_]*$/, type: moo.keywords({KW:["program"]})},
    /*keyword, */
    
    

};