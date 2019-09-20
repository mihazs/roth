import moo from "moo";
import rules from "./rules";

const lexer =  moo.compile(rules);
/*lexer.next = (next => () => {
    let tok;
    while ((tok = next.call(lexer)) && tok.type === "space") {}
    return tok;
})(lexer.next);
*/
export default lexer;