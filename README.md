# TechBricks-WebTask
Restful API using Nest.js and Postgresql in database to serve books data to a frontend application


# Task Description:
- Every book must have Name, ISNB Number, Author, year, publisher, and category.
- Every Author must have Name, Surname, birth date, and a photo.


# Endpoints:
- `[GET /api/book]` 
    - An endpoint to retrieve all books from databse.
- `[GET /api/author/:id/books]`
    - Create an endpoint to retrieve an author and his books  .
- `[GET /api/book/publisher]`
    - Create an endpoint to retrieve a publisher and the books published.
- `[GET /api/author]` 
    - An endpoint to retrieve all authors from databse.
    
    
# Database Design:
- Each Author has 1 or many books.
- Each Book is authorized by one Author.

