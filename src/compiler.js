import lexer from "./lexer";
import itt from "itt";

export default function(code){
    lexer.reset(code);

    return { lex: Array.from(lexer)};

}