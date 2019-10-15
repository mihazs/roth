import lexer from "../src/lexer";
import mlog from 'mocha-logger';
import {expect} from "chai";

describe("Análise léxica", function(){
    context("Programa", function(){
        it("declaração de programa", function(){
            lexer.reset("program teste;\n");
            expect(lexer.next()).to.include({type: "keyword"});
            expect(lexer.next()).to.include({type: "identificador", value:"teste"});
            expect(lexer.next()).to.include({type: "symbol", value:";"});
        });
        it("programa com corpo", function(){
            const program = 
            `program teste;
            begin
            end
            .`;
            lexer.reset(program);
            expect(lexer.next()).to.include({type: "keyword", value:"program", line:1});
            expect(lexer.next()).to.include({type: "identificador", value:"teste", line:1});
            expect(lexer.next()).to.include({type: "symbol", value:";", line:1});
            expect(lexer.next()).to.include({type: "begin", line:2});
            expect(lexer.next()).to.include({type: "end", line:3});
            expect(lexer.next()).to.include({type: "symbol", value:".", line:4});
        });
        it("declaração de variáveis simples", function(){
            lexer.reset(`declaravariaveis numero : integer;`);
            expect(lexer.next()).to.include({type: "keyword", value:"declaravariaveis", line:1});
            expect(lexer.next()).to.include({type: "identificador", value:"numero", line: 1});
            expect(lexer.next()).to.include({type: "symbol", value:":", line:1});
            expect(lexer.next()).to.include({type: "type", value:"integer", line:1});
            expect(lexer.next()).to.include({type: "symbol", value:";", line:1});
            
        });
        it("declaração de variáveis na mesma linha", function(){
            lexer.reset(`declaravariaveis _nome1, nome2, nome3 : string;`);
            expect(lexer.next()).to.include({type: "keyword", value:"declaravariaveis", line:1});
            expect(lexer.next()).to.include({type: "identificador", value:`_nome1`, line:1});
            expect(lexer.next()).to.include({type: "symbol", value:",", line:1});
            expect(lexer.next()).to.include({type: "identificador", value:`nome2`, line:1});
            expect(lexer.next()).to.include({type: "symbol", value:",", line:1});
            expect(lexer.next()).to.include({type: "identificador", value:`nome3`, line:1});
            expect(lexer.next()).to.include({type: "symbol", value:":", line:1});
            expect(lexer.next()).to.include({type: "type", value:"string", line:1});
            expect(lexer.next()).to.include({type: "symbol", value:";", line:1});
            
        });
        it("declaração de array", function(){
            lexer.reset(`declaravariaveis array_Integer : array[1..2] of integer;`);
            expect(lexer.next()).to.include({type: "keyword", value:"declaravariaveis", line:1});
            expect(lexer.next()).to.include({type: "identificador", value:"array_Integer", line: 1});
            expect(lexer.next()).to.include({type: "symbol", value:":", line:1});
            expect(lexer.next()).to.include({type: "type", value:"array", line:1});
            expect(lexer.next()).to.include({type: "symbol", value:"[", line:1});
            expect(lexer.next()).to.include({type: "numinteiro", value:"1", line:1});
            expect(lexer.next()).to.include({type: "symbol", value:"..", line:1});
            expect(lexer.next()).to.include({type: "numinteiro", value:"2", line:1});
            expect(lexer.next()).to.include({type: "symbol", value:"]", line:1});
            expect(lexer.next()).to.include({type: "of", value:"of", line:1});
            expect(lexer.next()).to.include({type: "type", value:"integer", line:1});
            
        });
     
    });
    context("Comentário", () => {
        it("bloco", () => {
            lexer.reset(`/*comentário\n de bloco*/ $teste$`);
            expect(lexer.next().type).to.be.equal("literal");
        });
    })
    context("Tipos de dados", function(){
        it("literal", function(){
            lexer.reset(`$isso é um literal$`);
            expect(lexer.next()).to.include({type:"literal", value:"$isso é um literal$"});
        });
        it("integer", function(){
            const program = `integer inteiro;`;
            lexer.reset(program);
            expect(lexer.next()).to.include({type:"type", value:"integer", line:1});
            expect(lexer.next()).to.include({type:"identificador", value:"inteiro", line:1});
            expect(lexer.next()).to.include({type:"symbol", value:";", line:1});
        })
        it("string", function(){
            const program = `string caractere;`;
            lexer.reset(program);
            expect(lexer.next()).to.include({type:"type", value:"string", line:1});
            expect(lexer.next()).to.include({type:"identificador", value:"caractere", line:1});
            expect(lexer.next()).to.include({type:"symbol", value:";", line:1});
        })
        it("char", function(){
            const program = `char caractere;`;
            lexer.reset(program);
            expect(lexer.next()).to.include({type:"type", value:"char", line:1});
            expect(lexer.next()).to.include({type:"identificador", value:"caractere", line:1});
            expect(lexer.next()).to.include({type:"symbol", value:";", line:1});
        })
        it("real", function(){
            const program = 
            `real tiporeal;
            tiporeal = 01.9531;`;
            lexer.reset(program);
            expect(lexer.next()).to.include({type:"type", value:"real", line:1});
            expect(lexer.next()).to.include({type:"identificador", value:"tiporeal", line:1});
            expect(lexer.next()).to.include({type:"symbol", value:";", line:1});
            expect(lexer.next()).to.include({type:"identificador", value:"tiporeal", line:2});
            expect(lexer.next()).to.include({type:"operator", value:"=", line:2});
            expect(lexer.next()).to.include({type:"numreal", value:"01.9531", line:2});
            expect(lexer.next()).to.include({type:"symbol", value:";", line:2});
        })
    });
    
});
