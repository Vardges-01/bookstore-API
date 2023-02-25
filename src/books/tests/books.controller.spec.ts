import { Test, TestingModule } from "@nestjs/testing"
import { BooksController } from "../books.controller"
import { BooksService } from "../books.service"
import { CreateBookDto } from "../dto/create-book.dto";
import { Books } from "../entity/books.entity";

jest.mock('../books.service');
jest.mock('../books.controller');

describe("BooksController", () => {
  let booksController: BooksController;
  // let booksService: BooksService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [BooksController],
      providers: [BooksService]
    }).compile();

    booksController = moduleRef.get<BooksController>(BooksController);
    // booksService = moduleRef.get<BooksService>(BooksService);
    jest.clearAllMocks();
  })

  // Create Book test
  describe("createBook", ()=>{
    describe("when createBook is called", ()=>{
      let books: Books
      let createBookDto: CreateBookDto

      beforeEach( async ()=>{
        createBookDto = {
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          isbn: '978-0547928227',
          price: 9.99
        }

        books = await booksController.createBook(createBookDto);
        
      })

      test("then it should call booksController",()=>{
        expect(booksController.createBook).toBeCalledWith(createBookDto);
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
        books = await booksController.getBookById(1);
      })

      test("then it should call booksController", () => {
        expect(booksController.getBookById).toBeCalledWith(1);
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
        books = await booksController.getBooks();
      })

      test("then it should call booksController", () => {
        expect(booksController.getBooks).toBeCalledWith();
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
        books = await booksController.deleteBook(1);
      })

      test("then it should call booksController", () => {
        expect(booksController.deleteBook).toBeCalledWith(1);
      })

      test('then is should return success is True', () => {
        expect(books).toEqual({
          success: true
        });
      })

    })
  })
})