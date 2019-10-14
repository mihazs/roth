import lexer from "../src/lexer";
import {expect} from "chai";
describe("Análise léxica", function(){
    context("Programa", function(){
        it("declaração de programa", function(){
            lexer.reset("program teste;\n");
            expect(lexer.next()).to.include({type: "keyword", value:"program"});
            expect(lexer.next()).to.include({type: "identifier", value:"teste"});
            expect(lexer.next()).to.include({type: "endline", value:";"});
            //expect(lexer.next()).to.undefined;
        });
        it("programa com corpo", function(){
            const program = 
            `program teste;\n 
            begin\n
            end\n.`;
            lexer.reset(program);
            expect(lexer.next()).to.include({type: "keyword", value:"program"});
            expect(lexer.next()).to.include({type: "identifier", value:"teste"});
            expect(lexer.next()).to.include({type: "endline", value:";"});
            expect(lexer.next()).to.include({type: "keyword", value:"begin"});
            expect(lexer.next()).to.include({type: "keyword", value:"end"});
            expect(lexer.next()).to.include({type: "keyword", value:"."});
            //expect(lexer.next()).to.undefined;
        });
     
    });
    context("Comentário", () => {
        it("bloco", () => {
            lexer.reset(`/*comentário\n de bloco*/`);
            const xp = lexer.next();
            console.log(`XP: ${xp}`);
            expect(xp).to.be.undefined;
        });
    })
    context("Tipos de dados", function(){
        it("literal", function(){
            const program = `$isso é um literal$`;
            lexer.reset(program);
            expect(lexer.next()).to.include({type:"literal", value:"$isso é um literal$"});
        })
    });
    
});
