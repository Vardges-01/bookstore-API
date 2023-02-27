import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookDto } from './dto/book.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { BookEntity } from './entity/book.entity';
import { compact, map} from "lodash";

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(BookEntity)
        private bookRepository: Repository<BookEntity>
    ) { }

    async createBook(createBookDto: CreateBookDto): Promise<BookDto> {
        const book = this.bookRepository.create(createBookDto);
        await this.bookRepository.save(book);
        return book.toDto();
    }

    async getBooks(): Promise<BookDto[]> {
        const books = await this.bookRepository.createQueryBuilder().getMany();
        const book = compact(map(books, (item) => item.toDto()));
        return book;
    }

    async getBookById(id: string): Promise<BookDto> {
        let book = await this.bookRepository.findOne({ where: { id } });

        return book.toDto();
    }

    async deleteBook(id: string): Promise<any> {

        const book = await this.bookRepository.findOne({ where: { id } });

        if (book) {
            try {

                await this.bookRepository.remove(book);

            } catch (err) {
                console.log(err);
            }
        }
        else {
            console.log("Book not found")
        }
    }

}
