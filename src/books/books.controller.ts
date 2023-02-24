import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Books } from './entity/books.entity';

@Controller('books')
export class BooksController {
    constructor(public readonly booksService: BooksService) { }

  @Get()
  async getBooks(): Promise<Books[]> {
    return this.booksService.getBooks();
  }

  @Get(':id')
  async getBookById(@Param('id') id: number): Promise<Books> {
    return this.booksService.getBookById(id);
  }

  @Post()
  async createBook(@Body() book: CreateBookDto): Promise<Books> {
    return this.booksService.createBook(book);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<void> {
    return this.booksService.deleteBook(id);
  }
}
