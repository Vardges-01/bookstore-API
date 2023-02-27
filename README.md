# BOOK STORE API

## Description

This API provides basic CRUD (create, read, delete) functionality for a book entity. The book entity has the following properties: id, title, author, isbn, and price. The API allows users to create new books, retrieve a list of all books, retrieve a single book by its ID, and delete a book by its ID.


## Technologies

This API is built using Nest.js, a popular Node.js framework, and uses PostgreSQL as the underlying database through the use of TypeORM, an object-relational mapper for TypeScript and JavaScript.


## Installation

1. Clone the repository:

```bash
$ git clone https://github.com/Vardges-01/bookstore-API.git
```
2. Navigate to the project directory:

```bash
$ cd bookstore-API
```
3. Install the dependencies:

```bash
$ npm insatll
```


## Running the app

1. Start the PostgreSQL database using Docker Compose:
```bash
$ npm run start:db
```

2. Generate and Run migrations
```bash
$ npm run migration:generate
$ npm run migration:run
```
3. Start the API:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## API Endpoints
The API exposes the following endpoints:

- POST /book - Create a new book
- GET /book - Retrieve all books
- GET /book/:id - Retrieve a single book by ID
- DELETE /book/:id - Delete a book by ID


## Test
The API includes both unit tests and integration tests. To run the tests:

```bash
# unit tests
$ npm run test
```


## Stay in touch

- Author - [Vardges Mirzakhanyan](https://www.linkedin.com/in/vardges-m/)
- Email - <v.mirzakhanyann@gmail.com>

