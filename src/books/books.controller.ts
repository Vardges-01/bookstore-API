import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Books } from './entity/books.entity';

@Controller('books')
export class BooksController {
  constructor(public readonly booksService: BooksService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createBook(@Body() book: CreateBookDto): Promise<Books> {
    return this.booksService.createBook(book);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getBooks(): Promise<Books[]> {
    return this.booksService.getBooks();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getBookById(@Param('id') id: number): Promise<Books> {
    return this.booksService.getBookById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteBook(@Param('id') id: number): Promise<void> {
    return this.booksService.deleteBook(id);
  }
}
