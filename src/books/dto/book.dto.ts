// import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { IsNumber, IsString } from 'class-validator';
import { AbstractDto } from '../../common/dto/abtract.dto';
import { BookEntity } from '../entity/book.entity';

export class BookDto extends AbstractDto {
    @IsString()
    title: string;
    @IsString()
    author: string;
    @IsString()
    isbn: string;
    @IsNumber()
    price: number;

    constructor(bookEntity: BookEntity) {
        super(bookEntity)

        this.title = bookEntity.title
        this.author = bookEntity.author
        this.isbn = bookEntity.isbn
        this.price = bookEntity.price
    }

}