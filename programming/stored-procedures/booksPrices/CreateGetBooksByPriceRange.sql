CREATE PROCEDURE GetBooksByPriceRange_RS @minPrice FLOAT, @maxPrice FLOAT
AS 
select *
from (                        SELECT ISBN, TITLE, PAGES, PRICE, AVAILABLE, 'book' as Type
        FROM BOOKS
        WHERE PRICE > @minPrice AND PrICE <= @maxPrice
    UNION
        SELECT ISBN, TITLE, PAGES, PRICE, AVAILABLE, 'specialist'
        FROM SPECIALBOOKS
        WHERE PRICE > @minPrice AND PrICE <= @maxPrice
    UNION
        SELECT ISBN, TITLE, PAGES, PRICE, AVAILABLE, 'school'
        FROM SCHOOLBOOKS
        WHERE PRICE > @minPrice AND PrICE <= @maxPrice
) as allbooks
ORDER BY PRICE ASC