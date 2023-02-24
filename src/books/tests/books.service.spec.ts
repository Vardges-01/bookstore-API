// import { Test, TestingModule } from '@nestjs/testing';
// import { BooksService } from './books.service';

// describe('BooksService', () => {
//   let service: BooksService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [BooksService],
//     }).compile();

//     service = module.get<BooksService>(BooksService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });
// });

// import { Test } from '@nestjs/testing';
// import { Books } from '../entity/books.entity';
// import { BooksService } from '../books.service';
// import { getRepositoryToken } from '@nestjs/typeorm';

// describe('BooksService', () => {
//   let bookService: BooksService;

//   const mockRepository = {
//     save: jest.fn(),
//     find: jest.fn(),
//     findOne: jest.fn(),
//     remove: jest.fn(),
//   };

// beforeEach(async () => {
//     const moduleRef = await Test.createTestingModule({
//       providers: [
//         BooksService,
//         {
//           provide: getRepositoryToken(Books),
//           useValue: mockRepository,
//         },
//       ],
//     }).compile();

//     bookService = moduleRef.get<BooksService>(BooksService);
//   });  


//   afterEach(() => {
//     jest.resetAllMocks();
//   });

//   it('should create a new book', async () => {
//     const book = new Books();
//     book.title = 'The Hobbit';
//     book.author = 'J.R.R. Tolkien';
//     book.isbn = '978-0547928227';
//     book.price = 9.99;

//     mockRepository.save.mockReturnValueOnce(book);

//     const createdBook = await bookService.create(book);

//     expect(mockRepository.save).toHaveBeenCalledWith(book);
//     expect(createdBook).toEqual(book);
//   });

//   it('should return all books', async () => {
//     const books = [
//       {
//         id: 1,
//         title: 'The Hobbit',
//         author: 'J.R.R. Tolkien',
//         isbn: '978-0547928227',
//         price: 9.99,
//       },
//       {
//         id: 2,
//         title: 'The Lord of the Rings',
//         author: 'J.R.R. Tolkien',
//         isbn: '978-0544003415',
//         price: 19.99,
//       },
//     ];

//     mockRepository.find.mockReturnValueOnce(books);

//     const allBooks = await bookService.findAll();

//     expect(mockRepository.find).toHaveBeenCalled();
//     expect(allBooks).toEqual(books);
//   });

//   it('should return a book by id', async () => {
//     const book = {
//       id: 1,
//       title: 'The Hobbit',
//       author: 'J.R.R. Tolkien',
//       isbn: '978-0547928227',
//       price: 9.99,
//     };

//     mockRepository.findOne.mockReturnValueOnce(book);

//     const foundBook = await bookService.findOne(1);
//     // expect(mockRepository.findOne).toHaveBeenCalledWith(1);
//     expect(foundBook).toEqual(book);
//   });

//   it('should delete a book by id', async () => {
//     const book = {
//       id: 1,
//       title: 'The Hobbit',
//       author: 'J.R.R. Tolkien',
//       isbn: '978-0547928227',
//       price: 9.99,
//     };

//     mockRepository.findOne.mockReturnValueOnce(book);
//     mockRepository.remove.mockReturnValueOnce({ affected: 1 });

//     const result = await bookService.remove(1);
    
//     expect(mockRepository.findOne).toHaveBeenCalledWith(1);
//     expect(mockRepository.remove).toHaveBeenCalledWith(1);
//     expect(result).toEqual({ success: true });
//   });

// });