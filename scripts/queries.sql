--Ich benötige alle Bücher des Verlegers Publisher3
--Versuch: Kreuzprodukt -> Funktioiert so nicht
--SELECT B.TITLE, P.NAME FROM PUBLISHERS AS P, BOOKS AS B WHERE NAME='Publisher3';
--Versuch: 2 Selektionen, erst die ID des Publishers, dann eine Selektion auf PUBLISHER_ID -> Funktioniert
--SELECT P.ID FROM PUBLISHERS AS P WHERE P.NAME = 'Publisher3';
--SELECT B.TITLE FROM BOOKS S B WHERE B.PUBLISHER_ID = 3;
--JOIN ... ON ... -> Bedingung, die aus dem Kreuzprodukt nur die passenden Kombinationen filtert
--SELECT B.TITLE, P.NAME FROM BOOKS AS B JOIN PUBLISHERS AS P ON P.ID = B.PUBLISHER_ID  WHERE P.NAME = 'Publisher3'
select TITLE, NAME FROM PUBLISHERS JOIN BOOKS ON PUBLISHER_ID = PUBLISHERS.ID WHERE NAME = 'Publisher3'
select BOOKS.TITLE, PUBLISHERS.NAME FROM PUBLISHERS JOIN BOOKS ON BOOKS.PUBLISHER_ID = PUBLISHERS.ID WHERE PUBLISHERS.NAME = 'Publisher3'
select B.TITLE, P.NAME FROM PUBLISHERS AS P JOIN BOOKS AS B ON B.PUBLISHER_ID = P.ID WHERE P.NAME = 'Publisher3'
select B.TITLE AS 'Book Title', P.NAME as 'Publisher Name' FROM PUBLISHERS AS P JOIN BOOKS AS B ON B.PUBLISHER_ID = P.ID WHERE P.NAME = 'Publisher3'
