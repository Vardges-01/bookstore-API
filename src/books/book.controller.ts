import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
  constructor(public readonly booksService: BookService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createBook(@Body() book: CreateBookDto): Promise<BookDto> {
    return this.booksService.createBook(book);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getBooks(): Promise<BookDto[]> {
    return this.booksService.getBooks();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getBookById(@Param('id') id: string): Promise<BookDto | Error> {

    return this.booksService.getBookById(id)
    
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteBook(@Param('id') id: string): Promise<void> {
    return this.booksService.deleteBook(id);
  }
}
