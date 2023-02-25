import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BooksService } from '../books.service';
import { CreateBookDto } from '../dto/create-book.dto';
import { Books } from '../entity/books.entity';

jest.mock('../books.service');

describe('BooksService', () => {
  let booksService: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        providers: [BooksService,
            {
                provide: getRepositoryToken(Books),
                useValue: {}
            }],
    }).compile();

    booksService = module.get<BooksService>(BooksService);
  });

  // Create book
  describe("createBook", ()=>{
    describe("when createBook is called", ()=>{
      let books: Books
      let createBookDto: CreateBookDto

      beforeEach( async ()=>{
        createBookDto = {
          title: 'The Hobbit 2',
          author: 'J.R.R. Tolkien',
          isbn: '978-0547928227',
          price: 9.99
        }

        books = await booksService.createBook(createBookDto);
      })

      test("then it should call booksService",()=>{
        expect(booksService.createBook).toBeCalledWith(createBookDto);
      })
      
      test("then the book should be created and returned", ()=>{
        expect(books).toEqual({
          id: 1,
          ...createBookDto
        });
      })
    })
  })

  // Get Book By Id 
  describe("getBookById", () => {
    describe("when getBookById is called", () => {
      let books: Books

      beforeEach(async () => {
        books = await booksService.getBookById(1);
      })

      test("then it should call booksService", () => {
        expect(booksService.getBookById).toBeCalledWith(1);
      })

      test('then is should return a book', () => {
        expect(books).toEqual({
          id: 1,
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          isbn: '978-0547928227',
          price: 9.99,
        });
      })

    })
  })

  // Get all books
  describe("getBooks", () => {
    describe("when getBooks is called", () => {
      let books: Books[]

      beforeEach(async () => {
        books = await booksService.getBooks();
      })

      test("then it should call booksService", () => {
        expect(booksService.getBooks).toBeCalledWith();
      })

      test('then is should return a books', () => {
        expect(books).toEqual([{
          id: 1,
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          isbn: '978-0547928227',
          price: 9.99,
        }]);
      })
    })
  })

  // Delete book
  describe("deleteBook", () => {
    describe("when deleteBook is called", () => {
      let books: any

      beforeEach(async () => {
        books = await booksService.deleteBook(1);
      })

      test("then it should call booksService", () => {
        expect(booksService.deleteBook).toBeCalledWith(1);
      })

      test('then is should return success is True', () => {
        expect(books).toEqual({
          success: true
        });
      })

    })
  })
});
