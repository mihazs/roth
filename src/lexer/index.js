import moo from "moo";
import rules from "./rules";

const lexer =  moo.compile(rules);
lexer.next = (next => () => {
    let tok;
    while ((tok = next.call(lexer)) && tok.hasOwnProperty("type") &&  (tok.type === "space" || tok.type === "comment" || tok.type==="newline")) {}
    return tok;
})(lexer.next);

export default lexer;