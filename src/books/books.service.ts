import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { Books } from './entity/books.entity';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Books)
        private bookRepository: Repository<Books>
    ) { }

    async getBooks(): Promise<Books[]> {
        return await this.bookRepository.find();
    }

    async getBookById(id: number): Promise<Books> {
        return await this.bookRepository.findOne({ where: { id } });
    }

    async createBook(Books: CreateBookDto): Promise<Books> {
        return await this.bookRepository.save(Books);
    }

    async deleteBook(id: number): Promise<any> {

        const book = await this.bookRepository.findOne({ where: { id } });

        if (book) {
            try {

                await this.bookRepository.remove(book);

            } catch (err) {
                // Handle error here
                console.log(err);
            }
        }
        else {
            console.log("Book not found")
        }
    }

}
