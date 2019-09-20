import lexer from "../src/lexer";
import {expect} from "chai";
describe("Análise léxica", function(){
    it("declaração de programa deve estar sendo analisado", function(){
        lexer.reset("program teste;\n");
        expect(lexer.next()).to.include({type: "keyword", value:"program"});
        expect(lexer.next()).to.include({type: "space"});
        expect(lexer.next()).to.include({type: "identifier", value:"teste"});
        expect(lexer.next()).to.include({type: "endline", value:";"});
        expect(lexer.next()).to.undefined;
    })
});
