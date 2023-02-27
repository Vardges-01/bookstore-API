import { Test, TestingModule } from "@nestjs/testing"
import { BookController } from "../book.controller"
import { BookService } from "../book.service"
import { BookDto } from "../dto/book.dto";
import { CreateBookDto } from "../dto/create-book.dto";

jest.mock('../book.service');
jest.mock('../book.controller');

describe("BooksController", () => {
  let bookController: BookController;
  // let booksService: BooksService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [BookController],
      providers: []
    }).compile();

    bookController = moduleRef.get<BookController>(BookController);
    jest.clearAllMocks();
  })

  // Create Book test
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

        book = await bookController.createBook(createBookDto);
        
      })

      test("then it should call booksController",()=>{
        expect(bookController.createBook).toBeCalledWith(createBookDto);
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
      let books: BookDto | Error

      beforeEach(async () => {
        books = await bookController.getBookById("0ab2272c-5201-44f6-8420-ea4eb9e65c8d");
      })

      test("then it should call booksController", () => {
        expect(bookController.getBookById).toBeCalledWith("0ab2272c-5201-44f6-8420-ea4eb9e65c8d");
      })

      test('then is should return a book', () => {
        expect(books).toEqual({
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
        books = await bookController.getBooks();
      })

      test("then it should call booksController", () => {
        expect(bookController.getBooks).toBeCalledWith();
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
        books = await bookController.deleteBook("0ab2272c-5201-44f6-8420-ea4eb9e65c8d");
      })

      test("then it should call booksController", () => {
        expect(bookController.deleteBook).toBeCalledWith("0ab2272c-5201-44f6-8420-ea4eb9e65c8d");
      })

      test('then is should return success is True', () => {
        expect(books).toEqual({
          success: true
        });
      })

    })
  })
})