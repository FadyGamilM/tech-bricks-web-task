# TechBricks-WebTask

Restful API using Nest.js and Postgresql in database to serve books data to a frontend application

# Task Description:

- Every book must have Name, ISNB Number, Author, year, publisher, and category.
- Every Author must have Name, Surname, birth date, and a photo.

# Selected Task:

`Deploy backend on Heroku free tier (use the database as an addon)`

# Endpoints:

- [https://tech-bricks-server-side-api.herokuapp.com/api/book]
  - An endpoint to retrieve all books from databse.
- [https://tech-bricks-server-side-api.herokuapp.com/api/author/2/books]
  - Create an endpoint to retrieve an author and his books.
- [https://tech-bricks-server-side-api.herokuapp.com/api/book/publishers]
  - an endpoint to retrieve a publisher and the books published by this publisher.
- [https://tech-bricks-server-side-api.herokuapp.com/api/author]
  - An endpoint to retrieve all authors from databse.

# Endpoints:

- [https://tech-bricks-server-side-api.herokuapp.com/api/book]
  - An endpoint to retrieve all books from databse.
- [https://tech-bricks-server-side-api.herokuapp.com/api/author/2/books]
  - Create an endpoint to retrieve an author and his books.
- [https://tech-bricks-server-side-api.herokuapp.com/api/book/publishers]
  - an endpoint to retrieve a publisher and the books published by this publisher.
- [https://tech-bricks-server-side-api.herokuapp.com/api/author]
  - An endpoint to retrieve all authors from databse.

# Database Design:

- Each Author has 1 or many books.
- Each Book is authorized by one Author.
- ER Diagram:
- ![1](ERD.png)
