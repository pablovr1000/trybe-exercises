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

head -5 skills.txt

2. Mostre na tela as 4 últimas skills do arquivo skills.txt .

tail -4 skills.txt

3. Apague todos os arquivos que terminem em .txt.

rm -rf *.txt



