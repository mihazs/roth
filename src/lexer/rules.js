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
    identifier: /[a-zA-Z_][a-zA-Z0-9_]+/,
    endline: ";",
    operator: ["+", "-", "*", "/"],
    space: {match: /\s+/, lineBreaks: true},
    
    //IDEN: {match: /^[a-zA-Z_][a-zA-Z0-9_]*$/, type: moo.keywords({KW:["program"]})},
    /*keyword, */
    
    

};