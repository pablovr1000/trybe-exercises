Parte I - Criação de arquivos e diretórios

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.

mkdir unix_tests cd unix.tests

2. Crie um arquivo de texto com o nome trybe.txt.

touch trybe.txt

3. Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt.

cp trybe.txt trybe_backup.txt

4. Renomeie o arquivo trybe.txt.

mv trybe.txt trybe2.txt

5. Dentro de unix_tests , crie um novo diretório chamado backup.

mkdir backup

6. Mova o arquivo trybe_backup.txt para o diretório backup.

mv trybe_backup.txt backup

7. Dentro de unix_tests, crie um novo diretório chamado backup2.

mkdir backup2

8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.

mv backup/trybe_backup.txt backup2

9. Apague a pasta backup.

rm -rf backup

10. Renomeie a pasta backup2 para backup.

mv backup2 backup

11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
pwd 

ls -l

12. Apague o diretório backup.

rm -rf backup

13. Limpe o terminal.

clear ou c+l


Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :

Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

Resposta -> cat >> skills.txt -> adiciona a lista -> ctrl + d

1. Mostre na tela as 5 primeiras skills do arquivo skills.txt.

head -n 5 skills.txt

2. Mostre na tela as 4 últimas skills do arquivo skills.txt .

tail -n 4 skills.txt

3. Apague todos os arquivos que terminem em .txt.

rm -rf *.txt

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


