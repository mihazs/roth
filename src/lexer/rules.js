import moo from "moo";
import itt from "itt";
export const tokens = {
  write: 0,
  while: 1,
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
  if: 15,
  identificador: 16,
  î: 17,
  for: 18,
  end: 19,
  else: 20,
  do: 21,
  declaravariaveis: 22,
  const: 23,
  char: 24,
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

const reserved = itt
  .keys({
    write: 0,
    while: 1,
    until: 2,
    to: 3,
    then: 4,
    repeat: 6,
    read: 8,
    or: 11,
    of: 12,
    if: 15,
    for: 18,
    end: 19,
    else: 20,
    do: 21,
    begin: 26
  })
  .map(x => [x, x])
  .toObject();

export default {
  comment: {match: /\/\*[\s\S]+\*\//, lineBreaks: true},
  literal: /\$(?:.{0,31})\$/,
  numreal: /[0-9]+\.[0-9]+/,
  numinteiro: /[0-9]+/,
  operator: ["+", "*", "/", "-", ">", ">=", "<>", "<", "="],
  symbol: ["]", "[", "(", ")", ":", ".", ";", "..", "$", ","],
  keyword: ["declaravariaveis"],
  identificador: {
    match: /[a-zA-Z_][a-zA-Z0-9_]{0,13}/, type: moo.keywords({
        type: ["array", "integer", "char", "string", "real"],
        keyword: ["program", "const", "procedure", "chamaprocedure"],
        operator:["or", "and"],
        ...reserved,
    })
  },
  space: {match: /\s+/, lineBreaks:true},

  

  //IDEN: {match: /^[a-zA-Z_][a-zA-Z0-9_]*$/, type: moo.keywords({KW:["program"]})},
  /*keyword, */
};
