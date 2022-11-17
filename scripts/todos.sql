--insert into PUBLISHERS VALUES (666, 'Anton')
--insert into BOOKS (ISBN, TITLE, PAGES, PRICE, AVAILABLE) VALUES('ISBN-Anton-1', 'Das Omen', 200, 19.99, 1)
--insert into AUTHORS VALUES (666, 'Aus Tirol', 'Anton')


--update BOOKS  set BOOKS.PUBLISHER_ID = PUBLISHERS.ID from PUBLISHERS  where PUBLISHERS.NAME = 'Anton'
-- select ID from PUBLISHERS where NAME = 'Anton'
-- select TITLE from BOOKS where PUBLISHER_ID = 666

insert into BOOKS_AUTHORS (BOOK_ID, AUTHOR_ID) select b.ISBN, a.ID from BOOKS as b, AUTHORS as a where b.TITLE = 'Das Omen' AND a.FIRSTNAME = 'Anton'