![imagem do titulo ](https://user-images.githubusercontent.com/125400490/236323581-df8a7b84-aa71-4343-8af4-17ce35f63d5d.png)




<h1 align="center">Oscar-goes-to... ?</h1>
Muito bem, Pessoal...

Hoje vamos trabalhar com o Oscar. A ideia de premiar ou ser premiado é para reconhecer:

Reconhecer uma qualidade
Reconhecer um atributo
Reconhecer o esforço...
Reconhecer sempre.

Nem todos os prêmios são merecidos e nem todos que merecem ganham prêmios. Então vale mesmo a pena, premiar?

1) Quantas vezes Natalie Portman foi indicada ao Oscar?
<code>Código: SELECT NAME, winner FROM movies WHERE NAME LIKE "%Natalie Portma%"</code>

<code>Resposta: Ela foi indicada 3 vezes ao Oscar</code>


2) Quantos Oscars Natalie Portman ganhou?
<code>Código: SELECT NAME, winner FROM movies WHERE NAME LIKE "%Natalie Portma%"</code>

<code>Resposta: Ela venceu apenas 1 vez o Oscar</code>


3) Amy Adams já ganhou algum Oscar?
<code>Código: SELECT NAME, winner FROM movies WHERE name LIKE "%Amy Adams%";</code>

<code>Resposta: Ela Nunca ganhou o Oscar</code>


4) A série de filmes Toy Story ganhou um Oscar em quais anos?
<code>Código: SELECT film, winner, year_ceremony FROM movies WHERE film LIKE "%Toy Story%";</code>

<code>Resposta: 2011 e 2020</code>


5) Quem tem mais Oscars: a categoria "Melhor Ator" ou "Melhor Filme"?
<code>Código: SELECT "Filmes" as category, count(*) as winner FROM movies WHERE category LIKE '%FILM%' and winner = "True" UNION SELECT "actor" as category, count(*) as winner FROM movies WHERE category LIKE '%ACTOR%' and winner = "True";</code>

<code>Resposta: A Categoria "Melhor Filme"</code>


6) O primeiro Oscar para melhor Atriz foi para quem? Em que ano?
<code>Código: SELECT name, year_ceremony, winner FROM movies WHERE category LIKE "%ACTRESS%" and winner = 1;</code>

<code>Resposta: Foi para Janet Gaynor em 1928</code>


7) Na coluna/campo Winner, altere todos os valores com "True" para 1 e todos os valores "False" para 0
<code>Código: UPDATE movies SET winner = 1 WHERE winner = "True";</code>
<code>UPDATE movies SET winner = 0 WHERE winner = "False";</code>


8) Em qual edição do Oscar "Crash" ganhou o prêmio principal?
<code>Código: SELECT film, winner, ceremony, category FROM movies WHERE film = "Crash" AND winner = 1;</code>

<code>Resposta: FILM EDITING, BEST PICTURE e WRITING</code>


9) Bom... dê um Oscar para um filme que merece muito, mas não ganhou.
<code>Código: INSERT INTO movies (year_film, year_ceremony, ceremony, category, name, film, winner) VALUES ('2016', '2017', '1', 'Best Film', 'Conrad Vernon', 'Sausage Party', 'True');</code>


10) O filme Central do Brasil aparece no Oscar?
<code>Código: SELECT film FROM movies where film like "%Central do Brasil%";</code>

<code>Resposta: Não Aparece</code>


11) Inclua no banco 3 filmes que nunca nem foram nomeados ao Oscar, mas que na sua opinião, merecem.
<code>Código 1: INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('2007', '2020', '92', 'HONORARY AWARD', 'José Padilha', 'Tropa de Elite', 'True');</code>

<code>Código 2: INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('2014', '2020', '92', 'VISUAL EFFECTS', 'Wes Ball', 'Maze Runner: Correr ou Morrer', 'False');</code>

<code>Código 3: INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('2013', '2020', '92', 'MUSIC (Original Song)', 'Guillermo del Toro', 'Círculo de Fogo', 'True');</code>


12) Crie uma nova categoria de premiação. Qualquer prêmio que você queira dar. Agora vamos dar esses prêmios aos filmes que você cadastrou na questão acima.
<code>Código: UPDATE movies SET category = 'BEST SCREENPLAY' WHERE category = 'HONORARY AWARD';</code>


13) Qual foi o primeiro ano a ter um prêmio do Oscar?
<code>Código: SELECT year_ceremony FROM movies</code>

<code>Resposta: O Primeiro ano foi 1928</code>


14) Pensando no ano em que você nasceu: Qual foi o Oscar de melhor filme, Melhor Atriz e Melhor Diretor?
<code>Código: SELECT film, category, year_ceremony, ceremony FROM movies WHERE year_ceremony = "2001";</code>

<code>Melhor Filme: Gladiator</code>

<code>Melhor Atriz: Julia Roberts</code>

<code>Melhor Diretor: Steven Soderbergh</code>


15) Agora procure 7 atrizes que não sejam americanas, europeias ou brasileiras. Vamos cadastrá-los no nosso banco, mas eles ainda não ganharam o Oscar. Só foram nomeados.
<code>Código 1: INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('2009', '2010', '1', 'ACTOR', 'Jamie Chung', 'Dragonball Evolution', 'False');</code>

<code>Código 2: INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('2021', '2021', '1', 'ACTOR', 'Jessica Henwick', 'Matrix Resurrections', 'False');</code>

<code>Código 3: INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('2001', '2002', '1', 'ACTOR', 'fatoumata diawara', 'Sia, The Dream of the Python', 'False');</code>

<code>Código 4: INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('2003', '2004', '1', 'ACTOR', 'charlize theron Chan', 'Monster - Desejo Assassino', 'False');</code>

<code>Código 5: INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('2010', '2011', '1', 'ACTOR', 'Zhao Tao', 'Memorias de Xangai', 'False');</code>

<code>Código 6: INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('1988', '1988', '1', 'ACTOR', 'Dolly Rathebe', 'Mapantsula', 'False');</code>

<code>Código 7: INSERT INTO movies (year_film, year_ceremony, ceremony, category, `name`, film, winner) VALUES ('2019', '2019', '1', 'ACTOR', 'Jackson Yee', 'Dias Melhores', 'False');</code>


16) Agora vamos falar da sua vida. Me diga o nome de uma pessoa que você admira e o que ela fez na sua vida. Agora me diz: Quê prêmio essa pessoa merece?
<code>Resposta: Meus pais que me criaram, premio de MELHORES PESSOAS!</code>
