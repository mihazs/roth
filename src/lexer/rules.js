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
    'real',
    'char',
    'array',
    'and'];

export default {
    keyword,
    identifier: /^[a-zA-Z_][a-zA-Z0-9_]*$/,
    //IDEN: {match: /^[a-zA-Z_][a-zA-Z0-9_]*$/, type: moo.keywords({KW:["program"]})},
    /*keyword, */
    endline: ";",
    space: {match: /\s+/, lineBreaks: true},

};