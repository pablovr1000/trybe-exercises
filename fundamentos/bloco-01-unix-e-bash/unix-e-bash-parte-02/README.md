Parte I - Comandos de Input e Output

1. Navegue até a pasta unix_tests.

cd unix_tests

2. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.

touch skills2.txt

cat > skills2.txt (adiciona os itens)
ou
echo "internet" >> skills.txt
echo "unix" >> skills.txt
echo "bash" >> skills.txt

3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 

cat >> skills2.txt (adiciona os itens) + ctrl + d depois sort < skills2.txt

4. Conte quantas linhas tem o arquivo skills2.txt.

cat skills2.txt | wc -l

5. Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.

sort < skills2.txt | head -n 3 > top_skills.txt

6. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

touch phrases2.txt
cat > phrases2.txt (adicona as frases)

7. Conte o número de linhas que contêm as letras br.

grep br phrases2.txt | wc -l

8. Conte o número de linhas que não contêm as letras br.

grep -v br phrases2.txt | wc -l

9. Adicione dois nomes de países ao final do arquivo phrases2.txt.

cat >> phrases2.txt (adiciona países depois ctrl +d)

10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

cat phrases2.txt countries.txt > bunch_of_things.txt

11. Ordene o arquivo bunch_of_things.txt.

sort | bunch_of_things.txt ou sort -o bunch_of_things bunch_of_things

Parte II - Permissões
1. Navegue até a pasta unix_tests;

cd unix_tests

2. Rode o comando ls -l e veja quais as permissões dos arquivos;

ls -l

3. Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;

chmod a+rw bunch_of_things.txt ls-l

4. Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;

chmod a-w bunch_of_things.txt ls-l

5. Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt.

chmod 644 bunch_of_things.txt ls-l

Parte III - Processos & Jobs
1. Liste todos os processos;

ps

2. Agora use o comando sleep 30 &;

30 &

3. Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);

ps | grep sleep
kill 55696

4. Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;

sleep 30 -> ctrl + z -> bg

5. Crie um processo em background que rode o comando sleep por 300 segundos;

sleep 300 &

6. Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente. Você deve criá-los em foreground (sem usar o & ) e enviá-los para background após cada um começar a executar;

200
100
ctrl + z
bg

7. Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.

jobs
fg %(número do processo)
ctrl z

8. Retome a execução do processo sleep 100 em background com o comando bg;

bg %(número do processo)

9. Termine a execução de todos os processos sleep (mate os processos).

ps | greep sleep
kill (número do processo)
ou
killall sleep





