import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BookService } from '../book.service';
import { BookDto } from '../dto/book.dto';
import { CreateBookDto } from '../dto/create-book.dto';
import { BookEntity } from '../entity/book.entity';

jest.mock('../book.service');

describe('BooksService', () => {
  let bookService: BookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        providers: [BookService,
            {
                provide: getRepositoryToken(BookEntity),
                useValue: {}
            }],
    }).compile();

    bookService = module.get<BookService>(BookService);
  });

  // Create book
  describe("createBook", ()=>{
    describe("when createBook is called", ()=>{
      let book: BookDto
      let createBookDto: CreateBookDto

      beforeEach( async ()=>{
        createBookDto = {
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          isbn: '978-0547928227',
          price: 15
        }

        book = await bookService.createBook(createBookDto);
      })

      test("then it should call booksService",()=>{
        expect(bookService.createBook).toBeCalledWith(createBookDto);
      })
      
      test("then the book should be created and returned", ()=>{
        expect(book).toEqual({
          id: "0ab2272c-5201-44f6-8420-ea4eb9e65c8d",
          ...createBookDto
        });
      })
    })
  })

  // Get Book By Id 
  describe("getBookById", () => {
    describe("when getBookById is called", () => {
      let book: BookDto | Error

      beforeEach(async () => {
        book = await bookService.getBookById("0ab2272c-5201-44f6-8420-ea4eb9e65c8d");
      })

      test("then it should call booksService", () => {
        expect(bookService.getBookById).toBeCalledWith("0ab2272c-5201-44f6-8420-ea4eb9e65c8d");
      })

      test('then is should return a book', () => {
        expect(book).toEqual({
          id: "0ab2272c-5201-44f6-8420-ea4eb9e65c8d",
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          isbn: '978-0547928227',
          price: 15,
        });
      })

    })
  })

  // Get all books
  describe("getBooks", () => {
    describe("when getBooks is called", () => {
      let books: BookDto[]

      beforeEach(async () => {
        books = await bookService.getBooks();
      })

      test("then it should call booksService", () => {
        expect(bookService.getBooks).toBeCalledWith();
      })

      test('then is should return a books', () => {
        expect(books).toEqual([{
          id: "0ab2272c-5201-44f6-8420-ea4eb9e65c8d",
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          isbn: '978-0547928227',
          price: 15,
        }]);
      })
    })
  })

  // Delete book
  describe("deleteBook", () => {
    describe("when deleteBook is called", () => {
      let books: any

      beforeEach(async () => {
        books = await bookService.deleteBook("0ab2272c-5201-44f6-8420-ea4eb9e65c8d");
      })

      test("then it should call booksService", () => {
        expect(bookService.deleteBook).toBeCalledWith("0ab2272c-5201-44f6-8420-ea4eb9e65c8d");
      })

      test('then is should return success is True', () => {
        expect(books).toEqual({
          success: true
        });
      })

    })
  })
});
