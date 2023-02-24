import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Books } from './entity/books.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Books])],
    controllers: [BooksController],
    providers: [BooksService]
})
export class BooksModule { }
