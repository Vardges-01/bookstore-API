import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookDTO } from './dto/create-book.dto';
import { Books } from './entity/books.entity';

@Injectable()
export class BooksService {
    constructor(
       @InjectRepository(Books)
       private bookRepository : Repository<Books>
    ) { }

    async findAll(): Promise<Books[]> {
        return await this.bookRepository.find();
    }

    async findOne(id: number): Promise<Books> {
        return await this.bookRepository.findOne({ where: { id } });
    }

    async create(Books: BookDTO): Promise<Books> {
        return await this.bookRepository.save(Books);
    }

    async remove(id: number): Promise<void> {
        await this.bookRepository.delete(id);
    }
}
