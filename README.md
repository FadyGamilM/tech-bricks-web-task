# TechBricks-WebTask
Restful API using Nest.js and Postgresql in database to serve books data to a frontend application

# Task Description:
- Every book must have Name, ISNB Number, Author, year, publisher, and category.
- Every Author must have Name, Surname, birth date, and a photo.

# Required Endpoints:
- Create an endpoint to retrieve all books `[GET /api/books]` .
- Create an endpoint to retrieve an author and his books `[GET /api/authors/books]` .
- Create an endpoint to retrieve a publisher and the books published. `[GET /api/publisher/books]`

# Database Design:
- Each Author has 1 or many books.
- Each Book is authorized by one Author.
- Each pubisher can publish 1 or many books.
- Each Book is published by 1 Publisher.
