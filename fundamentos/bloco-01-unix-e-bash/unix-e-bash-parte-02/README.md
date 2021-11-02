Parte II - Manipulação & Busca

Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:


curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

1. Mostre todo o conteúdo do arquivo countries.txt na tela.
cat countries.txt

2. Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.
less countries.txt

3. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.
less countries.txt
/Zambia

4. Busque por Brazil no countries.txt.
grep Brazil countries.txt

5. Busque novamente por brazil, mas agora utilizando o lower case.
grep -i brazil countries.txt

Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.


6. Busque pelas frases que não contenham a palavra fox.
grep -v fox phrases.txt

7. Conte o número de palavras do arquivo phrases.txt.
wc -w phrases.txt

8. Conte o número de linhas do arquivo phrases.txt.
wc -l phrases.txt

9. Crie os arquivos empty.tbt e empty.pdf.
touch empty.txt empty.pdf

10. Liste todos os arquivos do diretório unix_tests.
ls -l

11. Liste todos os arquivos que terminem com txt.
ls -l *txt

12. Liste todos os arquivos que terminem com tbt ou txt.
ls -l *t?t

13. Acesse o manual do comando ls.
man ls