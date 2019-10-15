# :pear: roth
Esse é o repositório da linguagem ROTH, criada para disciplina de Construção de Compiladores, do Curso de Engenharia de Computação da UFSC Araranguá, segundo semestre de 2019.

# Como executar

1) Instale o nodejs na sua máquina
2) Clone este repositório

```bash
git clone https://github.com/mihazs/roth.git
```

3) Abra a linha de comando, navegue até a pasta aonde o projeto foi clonado e digite:

```bash
node . run --help
```

A saída deverá ser parecida com:

```text
Usage: roth run [options] <arquivo>

Executa um arquivo .roth

Options:
  -l, --lex       Mostra o resultado do lexer
  -s, --syntax    Mostra o resultado da análise sintática
  -c, --semantic  Mostra o resultado da análise semântica
  -h, --help      output usage information
```

Para executar um arquivo .roth e exibir a saída do analisador léxico basta utilizar:

```bash
node . run <caminho_do_arquivo_roth> --lex
```

Os exemplos estão localizados na pasta examples, sendo que um deles "error.roth" é utilizado para o teste de erros.

Bugs e demais sugestões, por favor abrir uma issue.

## Anexos
![Autômato do analisador léxico](./anexos/automato_lexico.pdf)

![Manual da linguagem](./anexos/manual.pdf)