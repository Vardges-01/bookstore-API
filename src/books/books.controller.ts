import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDTO } from './dto/create-book.dto';
import { Books } from './entity/books.entity';

@Controller('books')
export class BooksController {
    constructor(public readonly booksService: BooksService) { }

    @Get()
    async findAll(): Promise<Books[]> {
        return this.booksService.findAll();
    }

      @Get(':id')
      async findOne(@Param('id') id: number): Promise<Books> {
        return this.booksService.findOne(id);
      }

    @Post()
    async create(@Body() book: BookDTO): Promise<Books> {
        return this.booksService.create(book);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.booksService.remove(id);
    }
}
